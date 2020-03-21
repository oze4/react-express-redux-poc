import React, { Component } from "react";
import withRedux from "./Redux/containers";

class Home extends Component {
  render() {
    const { state } = this.props.location;
    const message = state && state.message;

    return (
      <div style={{ marginTop: "50px" }}>
        <h1>{message ? message : "Home!"}</h1>
      </div>
    );
  }
}

export default withRedux(Home);
