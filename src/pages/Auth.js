import React from 'react';
import { AuthRoutes } from '../routes/AuthRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export const Auth = () => {
  return (
    <Router>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <div className="tabs is-centered">
            <ul>
              {
                AuthRoutes.map((val, idx) => 
                  <li key={idx}>
                    <NavLink key={idx} exact={val.exact} to={val.path} activeClassName="is-active">{val.title}</NavLink>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
        <Switch>
            {
              AuthRoutes.map((val, idx) =>
                <Route
                  key={idx}
                  path={val.path}
                  exact={val.exact}
                  children={<val.component />}
                ></Route>
              )
            }
          </Switch>
        </div>
      </div>
    </Router>
  )
}
