import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import Header from "./HeaderFullScreeen";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <Header {...props} />
          <Component {...props} />
        </div>
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth
});

export default connect(mapStateToProps)(PublicRoute);
