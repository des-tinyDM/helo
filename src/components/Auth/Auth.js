import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  render() {
    return (
      <div className="Auth">
        <div>Logo</div>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <div className="login-register-btn">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    );
  }
}

export default Auth;
