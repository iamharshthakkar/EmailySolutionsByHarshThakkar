import React, { Component } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import Surveys from "./surveys/Surveys";
import Credits from "./Credits";

export const history = createHistory();

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <PublicRoute path="/" component={Landing} exact />
            <PrivateRoute path="/dashboard" component={Dashboard} exact />
            <PrivateRoute path="/surveys" component={Surveys} exact />
            <PrivateRoute path="/credits" component={Credits} exact />
            <PrivateRoute path="/surveys/new" component={SurveyNew} exact />
          </Switch>
        </BrowserRouter>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
