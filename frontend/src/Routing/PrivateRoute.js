import React from "react";
import withRedux from "../Redux/containers";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, state, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      state.isAccountVerified ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/", state: { message: "Not Authorized!" } }}
        />
      )
    }
  />
);

export default withRedux(PrivateRoute);
