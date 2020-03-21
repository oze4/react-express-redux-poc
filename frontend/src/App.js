import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes";
import withRedux from "./Redux/containers";

class App extends Component {
  state = {
    un: "",
    pw: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleUnInput = event => {
    this.setState({
      ...this.state,
      un: event.target.value
    });
  };

  handlePwInput = event => {
    this.setState({
      ...this.state,
      pw: event.target.value
    });
  };

  handleLogout = () => {
      this.props.setAccountStatus(false);
  }

  handleLogin = () => {
    fetch("http://localhost:8002/authorize", {
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
        <div style={{ margin: '40px' }}>
          {isAccountVerified ? (
            <button onClick={this.handleLogout}>Logout</button>
          ) : (
            <React.Fragment>
              <p>
                Try to visit the 'Protected' route above. Unless you are logged
                in it won't work.
              </p>
              Username:
              <input type="text" onInput={this.handleUnInput} />
              <br />
              Password:
              <input type="password" onInput={this.handlePwInput} />
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
