import React, { useEffect } from 'react';
import { API } from './configs/API';
import 'bulma/css/bulma.css';
import './App.css';

import { routes } from './Routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const test = () => {
    // console.log(API.headers);
    const res = API.get('news');
    console.log(res.status);
    // console.log(res);
  }

  useEffect(() => {
    // test();
    // console.log(test());
  });

  return (
    <Router>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://sevima.com/wp-content/themes/sevima2019/img/logo-sevima.png" className="img-brand" width="90" height="80" />
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <a className="navbar-item">Your Posts</a> */}
            <Link className="navbar-item" to="/">Home</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/other">Register</Link>
                <Link className="button is-light" to="/">Log in</Link>
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
                routes.map((val, idx) =>
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
