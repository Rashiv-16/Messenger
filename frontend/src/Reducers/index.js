import { combineReducers } from "redux";
import googleAuthReducer from "./googleAuthReducer";
import currentLoggedInUserReducer from "./currentLoggedInUserReducer";
import currentChatReducer from "./currentChatReducer";

export default combineReducers({
  googleAuthReducer,
  loggedInUser: currentLoggedInUserReducer,
  currentChat: currentChatReducer,
});
