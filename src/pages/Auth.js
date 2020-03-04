import React, { useContext } from 'react';
import { AuthRoutes } from '../routes/AuthRoute';
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { AppContext } from '../configs/Auth';
import { AlreadyLoggedInMiddleware } from '../configs/Middleware';

export const Auth = () => {
  const {authData} = useContext(AppContext);

  return (
    <AlreadyLoggedInMiddleware authData={authData}>
      <div>
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
      </div>
    </AlreadyLoggedInMiddleware>
  )
}
