import React, { Component } from 'react';

import { Route } from "react-router-dom";

import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen';
import CreateMessageScreen from './Screen/CreateMessageScreen';
import CommentScreen from './Screen/CommentScreen';
import CreateCommentScreen from './Screen/CreateCommentScreen';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={'/'}  component={LoginScreen} />
        <Route path={'/RegisterScreen'} component={RegisterScreen} />
        <Route path={'/HomeScreen'} component={HomeScreen} />
        <Route path={'/CreateMessageScreen'} component={CreateMessageScreen} />
        <Route path={'/CommentScreen/:id'} component={CommentScreen} />
        <Route path={'/CreateCommentScreen/:id'} component={CreateCommentScreen} />
      </div>
    );
  }
}

export default App;
