import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  CURRENT_LOGGED_IN_USER,
  FRIEND_LIST,
  CURRENT_CHAT,
} from "./types";

// import auth from "../api/auth";
import axios from "axios";

export const googleSignIn = () => {
  return {
    type: GOOGLE_SIGN_IN,
  };
};

export const googleSignOut = () => {
  return {
    type: GOOGLE_SIGN_OUT,
  };
};

export const currentLoggedInUser = () => async (dispatch) => {
  const { data } = await axios.get("/api/auth/google/current_user");
  dispatch({
    type: CURRENT_LOGGED_IN_USER,
    payload: data,
  });
};

export const friendList = () => async (dispatch) => {
  const friendList = await axios.get("api/auth/friend_list");
  dispatch({
    type: FRIEND_LIST,
    payload: friendList,
  });
};

export const currentChat = (chatDetails) => {
  return {
    type: CURRENT_CHAT,
    payload: chatDetails,
  };
};
