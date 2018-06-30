import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen';
import CreateMessageScreen from './Screen/CreateMessageScreen';

class App extends Component {
  render() {
    return (
        <div>       
        <Route exact path={'/'}  component={LoginScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/HomeScreen'} component={HomeScreen} />
        <Route path={'/CreateMessageScreen'} component={CreateMessageScreen} />
        </div>
    );
  }
}

export default App;
