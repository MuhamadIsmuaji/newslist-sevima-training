import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from './configs/API';

function App() {
  const test = () => {
    // console.log(API.headers);
    const res = API.get('news');
    console.log(res.status);
    // console.log(res);
  }

  useEffect(() => {
    test();
    // console.log(test());
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
