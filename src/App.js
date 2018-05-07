import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import routes from "./routes";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? null : <Nav />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
