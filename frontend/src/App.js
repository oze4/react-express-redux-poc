import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routing/Routes";
import { withRedux } from "./Redux";
import Logout from "./Components/Logout";

class App extends Component {
  state = {
    un: "",
    pw: ""
  };

  handleInput = event => {
    this.setState({
      ...this.state,
      [event.target.getAttribute('d-t')]: event.target.value
    });
  };

  handleLogin = () => {
    let url = `${document.location}authorize`;
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8002/authorize";
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ un: this.state.un, pw: this.state.pw })
    })
      .then(res => res.text())
      .then(data => {
        if (data === "true") {
          this.props.setAccountStatus(true);
        } else {
          alert("Incorrect credentials!");
        }
      })
      .catch(err => console.log("Something went wrong! " + err.message));
  };
  render() {
    const { isAccountVerified } = this.props.state;

    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/protected">Protected</Link>
        <div style={{ margin: "40px" }}>
          {isAccountVerified ? (
            <Logout />
          ) : (
            <React.Fragment>
              <p>
                Try to visit the 'Protected' route above. Unless you are logged
                in it won't work.
              </p>
              Username:
              <input type="text" d-t="un" onInput={this.handleInput} />
              <br />
              Password:
              <input type="password" d-t="pw" onInput={this.handleInput} />
              <br />
              <small>Username is 'a' password is 'a'</small>
              <br />
              <button onClick={this.handleLogin}>Login</button>
            </React.Fragment>
          )}
        </div>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default withRedux(App);
