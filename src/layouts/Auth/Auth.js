import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "routes.js";

class AuthLayout extends React.Component {

  getRoutes = routes => {

    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {

        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <div
            className="main-panel"
            ref="mainPanel"
          >
            <Switch>
              {this.getRoutes(routes)}
              <Redirect from="*" to="/landing"/>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default AuthLayout;