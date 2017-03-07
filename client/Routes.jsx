import React from 'react';
import { Route } from 'react-router';

import App from './app.jsx';
import Login from './login.jsx'

export default (
  <Route path='' component={App}>
    <Route path="/" component={Login} />
    <Route path="data" component={Login} />
  </Route>
);