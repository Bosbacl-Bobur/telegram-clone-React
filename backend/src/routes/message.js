import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import Message from "../models/Message.js";

const router = express.Router();

/**
 * POST /api/message/send
 * Yangi xabar yuborish
 */
router.post("/send", authMiddleware, async (req, res) => {
  try {
    const { receiver, text } = req.body;

    if (!receiver || !text) {
      return res.status(400).json({ message: "Receiver and text are required" });
    }

    const newMessage = new Message({
      sender: req.user.id,
      receiver,
      text,
    });

    await newMessage.save();

    res.status(201).json({ message: "Message sent", newMessage });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * GET /api/message/conversation/:userId
 * Bitta user bilan chat tarixini olish
 */
router.get("/conversation/:userId", authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: userId },
        { sender: userId, receiver: req.user.id },
      ],
    })
      .sort({ createdAt: 1 }) // eski -> yangi
      .populate("sender", "username")
      .populate("receiver", "username");

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
