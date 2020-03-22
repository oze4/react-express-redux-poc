import React from "react";
import { withRedux } from "../Redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, state, ...rest }) => {
  if (!state.isAccountVerified) {
    setTimeout(() => alert("Not authorized!"), 10);
  }

  return (
    <Route
      {...rest}
      render={props =>
        state.isAccountVerified ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default withRedux(PrivateRoute);
