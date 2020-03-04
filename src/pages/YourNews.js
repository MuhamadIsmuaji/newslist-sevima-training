import React, { useContext } from 'react';
import { AuthMiddleware } from '../configs/Middleware';
import { AppContext } from '../configs/Auth';
import { Switch, Route } from 'react-router-dom';
import { YourNewsRoutes } from '../routes/YourNewsRoute';

export const YourNews = () => {
  const {authData} = useContext(AppContext);

  return (
    <AuthMiddleware authData={authData}>
      <div style={{marginTop: "10px"}}>
        <div className="columns is-mobile">
          <div className="column is-12">
            <Switch>
              {
                YourNewsRoutes.map((val, idx) =>
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
    </AuthMiddleware>
  )
}