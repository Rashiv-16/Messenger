import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import Friend from "../models/friendListModel.js";

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "383691740409-pfqj2931ruvhb4mj7o2k7cfgk37lgd9i.apps.googleusercontent.com",
      clientSecret: "UvpfUfUqkB98Utlofe1B7qih",
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ oauthProfileID: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          name: profile.displayName,
          email: profile._json.email,
          oauthProfileID: profile._json.sub,
          img: profile._json.picture,
        });
        await user.save();

        // console.log(user);
        const userId = await User.findOne({ email: user.email });
        // console.log(userId);
        const friend = new Friend({
          profile_id: userId._id,
          friends: [],
        });
        friend.save();

        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
  )
);
