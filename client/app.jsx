import React, { Component } from 'react';

import Navbar from './navbar.jsx'
import Login from './login.jsx'

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state ={}
  }

  render () {
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
