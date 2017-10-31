import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login.jsx';
import Show from './show.jsx';

const Main = () => (
    <div>
      <Route exact path='/' component={Show}/>
      <Route path='/new' component={Login}/>
    </div>
);

export default Main;
