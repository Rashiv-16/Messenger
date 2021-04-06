import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    //add a field of display name
    email: {
      type: String,
      required: true,
      unique: true,
    },
    oauthProfileID: {
      type: String,
      default: null,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
