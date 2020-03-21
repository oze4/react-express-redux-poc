import * as types from "../constants";

const defaultState = {
  isAccountVerified: false
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case types.IS_ACCOUNT_VERIFIED: {
      return state.isAccountVerified;
    }

    case types.SET_ACCOUNT_STATUS: {
      return {
        isAccountVerified: action.payload
      };
    }

    default:
      return state;
  }
}
