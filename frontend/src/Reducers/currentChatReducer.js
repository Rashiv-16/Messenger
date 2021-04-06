import { CURRENT_CHAT } from "../Actions/types";

const INITIAL_STATE = {
  name: null,
};

const currentChatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_CHAT:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};
export default currentChatReducer;
