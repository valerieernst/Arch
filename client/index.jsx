import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './Routes.jsx';

//render app to DOM with ReactDOM
ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));