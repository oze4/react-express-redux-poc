import { connect } from "react-redux";
import * as actions from "../actions";

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

export default function withRedux(WrappedComponent) {
  return connect(mapAppStateToProps, mapAppDispatchToProps)(WrappedComponent);
}
