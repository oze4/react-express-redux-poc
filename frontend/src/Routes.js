import React from "react";

import Home from "./Home";
import Protected from "./Protected";
import PrivateRoute from "./PrivateRoute";

import { Route, Switch } from "react-router-dom";

export default function Routes(/* props */) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/protected" component={Protected} />
      <Route render={() => <h1>Route Not Found</h1>} />
    </Switch>
  );
}
