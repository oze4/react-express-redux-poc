import * as types from "../constants";

const defaultState = {
  isAccountVerified: false
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case types.SET_ACCOUNT_STATUS: {
      return {
        ...state,
        isAccountVerified: action.payload
      };
    }

    default:
      return state;
  }
}
