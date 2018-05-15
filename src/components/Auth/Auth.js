import React, { Component } from "react";
import "./Auth.css";
import axios from "axios";
import logo from "../../helion.jpg";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import { withRouter } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameInput(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  handleRegister() {
    let { username, password } = this.state;
    console.log(username, password);
    axios
      .post(`/api/register`, {
        username,
        password
      })
      .then(console.log(`submitted`))
      .catch(err => console.log(err));
  }

  async handleLogin() {
    let { username, password } = this.state;
    console.log(username, password);
    await axios
      .post(`/api/login`, {
        username,
        password
      })
      .then(response => {
        console.log(response);
        this.setState({ user: response.data });
      })
      .then(() => this.props.getUser(username, password))
      .catch(err => console.log(err));

    this.props.history.push(`/dashboard`);
  }

  render() {
    console.log(this.state, this.props);
    return (
      <div className="Auth">
        <img className="auth-logo" src={logo} />
        <h1>Heléonne</h1>
        <div className="input-box">
          <p>Username:</p>
          <input
            value={this.state.username}
            onChange={this.handleUsernameInput}
          />
        </div>
        <div className="input-box">
          <p>Password</p>
          <input
            value={this.state.password}
            onChange={this.handlePasswordInput}
          />
        </div>
        <div className="login-register-btn">
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(Auth));
