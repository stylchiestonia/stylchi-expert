import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import routes from "routes.js";

class AuthLayout extends React.Component {
  componentDidMount() {
    document.body.classList.add("white-content");
  
  }
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
            <div className="content">
            <Switch>
              {this.getRoutes(routes)}
              <Redirect from="*" to="/auth/login"/>
            </Switch>
          </div>
      </>
    );
  }
}

export default AuthLayout;