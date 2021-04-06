import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import "./services/passport.js";
import passport from "passport";
import cookieSession from "cookie-session";
import User from "./models/userModel.js";
// import Fr from "./models/userModel.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Friend from "./models/friendListModel.js";
import { createServer } from "http";
import * as path from "path";
import { Server } from "socket.io";
import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(
//   "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"
// );

// const msg = {
//   to: "abzthegamer@gmail.com", // Change to your recipient
//   from: "abhishekyaduvanshi22@gmail.com", // Change to your verified sender
// subject: "Add request from one of your friend on the Messenger Chat App",
// text: "and easy to do anywhere, even with Node.js",
// html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   templateId: "d-df06ed2d277e455883731dec53c29fa9",
//   dynamicTemplateData: {
//     unique_name: "Abhishek",
//     add_link: "era6446asf5",
//     base_address: "http://localhost:3000",
//   },
// };

// sgMail
//   .send(msg)
//   .then(() => console.log("Email Sent"))
//   .catch((err) => console.log(err));

dotenv.config();
connectDB();
const app = express();
const server = createServer(app);
const io = new Server(server);
const key1 = "isuddibsubasuvs6d1651sd6516oi3j266*(HGVFCF$#YBHBJN651Bfg#$^";

const cookieSessionVariable = cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [key1],
});

app.use(cookieSessionVariable);

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const isLoggedIn = (req, res, next) => {
  console.log("Middleware ran");
  console.log(req.session.id);
  if (req.isAuthenticated()) next();
  else {
    console.log("I ran");
    // res.redirect("/");
  }
};

const userHandler = async (req, res) => {
  const user = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    img: req.body.img,
  });
  user.save();
};

app.get("/", (req, res) => {
  res.send("done");
});

//logging in via google oauth
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//callback for google oauth
app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/messenger");
  }
);

// app.use(isLoggedIn);

app.post("/api/auth/google/add", (req, res) => {
  userHandler(req);
  // console.log(req.body);
  res.send("User added");
});

const friendListHandler = async (req, res) => {
  const currentUser = req.user._id;
  const friends = await Friend.findOne({ profile_id: currentUser });
  const stuff = friends.friends.map(async ({ user_id }) => {
    const person = await User.findById(user_id);
    return await person;
  });
  stuff.then((data) => console.log(data)).catch((e) => console.log(e));
};

//get friend list
app.get("/api/auth/friend_list", (req, res) => {
  const friendList = friendListHandler(req);
  // console.log(friendList);
  res.status(200).json(friendList);
});

// make two more models... sent requests, received requests
const addFriendHandler = async (req, res) => {
  if (req.isAuthenticated()) {
    const currentUser = req.user._id;
    const addFriend = req.body.email;

    const found = await User.findOne({ email: addFriend });
    if (found) {
      await Friend.findOneAndUpdate(
        { profile_id: currentUser },
        { $push: { friends: { user_id: found._id } } },
        { new: true }
      );
    } else {
      console.log(
        "nooob! he's a new user,invite him via sendgrid mail template"
      );
    }
  } else console.log("GTFO You unauthorized peasant");
};
// fetch('localhost:5000/api/auth/add_friends', options)
//current user details
app.get("/api/auth/google/current_user", (req, res) => {
  if (req.isAuthenticated()) res.send(req.user);
  else res.send(req.isAuthenticated());
});

//add friend
app.post("/api/auth/add_friends", (req, res) => {
  addFriendHandler(req);
  res.send("Friend Added");
});

app.get("/api/auth/google/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// app.get("*", (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname + "../frontend/public/index.html"));
// });

const wrap = (middleware) => (socket, next) =>
  middleware(socket.request, {}, next);

io.use(wrap(cookieSessionVariable));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.on("connection", (socket) => {
  // console.log(socket);
  console.log(`new connection ${socket.id}`);
  // console.log(`session ${req.session}`);
  // console.log(`socket session ${socket.request.session}`);
  socket.on("disconnect", () => {
    console.log("A User Disconnected");
  });

  // const session = socket.request.session;
  // console.log(socket.request.session.id);
  // console.log(`saving sid ${socket.id} in session ${session.id}`);
  // session.socketId = socket.id;
  // session.save();
});

server.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  )
);
