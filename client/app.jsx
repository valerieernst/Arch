import React, { Component } from 'react';

import Navbar from './navbar.jsx'

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state ={}
  }

//will render component based on react-router
  render () {
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
