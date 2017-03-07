import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './Routes.jsx';

//render app to DOM with ReactDOM
ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));