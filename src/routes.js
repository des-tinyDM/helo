import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";

export default (
  <Switch>
    <Route render={() => <Dashboard />} path="/dashboard" />
    <Route render={() => <Post />} path="/post/:postid" />
    <Route render={() => <Form />} path="/new" />
    <Route render={() => <Auth />} path="/" />
  </Switch>
);
