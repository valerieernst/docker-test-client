import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import NavBar from './navbar.jsx';
import Main from './main.jsx';

const App = () => (
  // might want to turn this into an actual nav with bootstrap
    <div>
      <NavBar />
      <Main />
    </div>
)

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>), document.getElementById('app'));
