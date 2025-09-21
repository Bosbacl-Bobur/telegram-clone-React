import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

/**
 * GET /api/user/profile
 * Faqat login qilgan user profile ma’lumotini qaytaradi
 */
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // parolsiz ma’lumot
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User profile fetched successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
