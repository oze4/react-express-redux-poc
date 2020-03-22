import { connect } from "react-redux";
import { createStore } from "redux";

/**
 * Constants
 */

const constants = {
  SET_ACCOUNT_STATUS: "SET_ACCOUNT_STATUS"
};

/**
 * Actions
 */

const actions = {
  setAccountStatus: payload => ({
    type: constants.SET_ACCOUNT_STATUS,
    payload
  })
};

/**
 * Containers
 */

function mapAppDispatchToProps(dispatch) {
  return {
    setAccountStatus: payload => {
      dispatch(actions.setAccountStatus(payload));
    }
  };
}

function mapAppStateToProps(state) {
  return {
    state
  };
}

function withRedux(WrappedComponent) {
  return connect(mapAppStateToProps, mapAppDispatchToProps)(WrappedComponent);
}

/**
 * Reducers
 */

const defaultState = {
  isAccountVerified: false
};

function appReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.SET_ACCOUNT_STATUS: {
      return {
        ...state,
        isAccountVerified: action.payload
      };
    }

    default:
      return state;
  }
}

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * Exports
 */

export default store;
export {
    withRedux,
}
