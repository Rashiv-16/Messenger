import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    profile_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: [
      {
        type: String,
        required: true,
        timestamp: true,
      },
    ],
  },
  {
    timestamp: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
