import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // kim yubordi
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // kimga yuborildi
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt va updatedAt
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
