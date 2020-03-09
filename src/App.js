import React, { useReducer } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { history } from './configs/History';
import { MainRoutes } from './routes/MainRoute';
import { authReducer, initializeAuthData, AppContext } from './configs/Auth';

function App() {
  const [authData, dispatchAuth] = useReducer(authReducer, initializeAuthData)

  const logout = () => {
    dispatchAuth({ type: 'REMOVE_AUTH' });
    history.push('/');
  }

  return (
    <Router history={history}>
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
            {
              authData ? (<Link className="navbar-item" to="/yournews">Your News</Link>) : (``)
            }
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {
                  authData ? (
                    <button className="button is-danger is-small" onClick={logout}>Log out</button>
                  ) : (
                    <Link className="button is-primary is-small" to="/auth/register">Register</Link>
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
            <AppContext.Provider value={{ authData, dispatchAuth }}>
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
            </AppContext.Provider>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
