import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import Header from "../components/HeaderLoggedIn";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header {...props} />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
