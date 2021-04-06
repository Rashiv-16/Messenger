import mongoose from "mongoose";

const friendListSchema = mongoose.Schema({
  profile_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  friends: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        timestamp: true,
      },
    },
  ],
});

const Friend = mongoose.model("Friend", friendListSchema);

export default Friend;
