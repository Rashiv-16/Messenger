import { CURRENT_LOGGED_IN_USER } from "../Actions/types";

const INITIAL_STATE = {
  id: null,
  name: null,
  email: null,
  img: null,
};

const currentLoggedInUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_LOGGED_IN_USER:
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        img: action.payload.img,
      };
    default:
      return state;
  }
};

export default currentLoggedInUserReducer;
