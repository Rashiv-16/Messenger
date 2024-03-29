import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from "../Actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
};

const googleAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return { ...state, isSignedIn: true };
    case GOOGLE_SIGN_OUT:
      return { ...state, isSignedIn: false };

    default:
      return state;
  }
};

export default googleAuthReducer;
