import React from 'react';
import { Route } from 'react-router';

import App from './app.jsx';
import Login from './login.jsx'
import Data from './data.jsx'


//if there's no token, redirects to login page
function requireAuth(nextState, replaceState) {
  if (!window.sessionStorage.accessToken)
    replaceState({ nextPathname: nextState.location.pathname }, '/')
}

export default (
  <Route path='' component={App}>
    <Route path="/" component={Login} />
    <Route path="data" component={Data} onEnter={requireAuth} />
  </Route>
);