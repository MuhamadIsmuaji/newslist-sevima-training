import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { MainRoutes } from './routes/MainRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { isLoggedIn } from './configs/Auth';
import { STORAGEKEY } from './configs/KEY';

function App() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem(STORAGEKEY);
    history.push('/');
  }

  return (
    <Router>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://sevima.com/wp-content/themes/sevima2019/img/logo-sevima.png" className="img-brand" width="90" height="80" />
          </Link>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/other">News</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {
                  isLoggedIn ? (
                    <button className="button is-danger" onClick={logout}>Log out</button>
                  ) : (
                    <Link className="button is-primary" to="/auth/register">Register</Link>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <Switch>
              {
                MainRoutes.map((val, idx) =>
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
    </Router>
  );
}

export default App;
