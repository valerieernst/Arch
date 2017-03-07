import React from 'react';
import { Route } from 'react-router';

import App from './app.jsx';
import Login from './login.jsx'
import Data from './data.jsx'

export default (
  <Route path='' component={App}>
    <Route path="/" component={Login} />
    <Route path="data" component={Data} />
  </Route>
);