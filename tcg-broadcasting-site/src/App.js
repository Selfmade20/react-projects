import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import LoginForm from  './containers/LoginForm/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './containers/Posts'



class App extends Component {
  render() {
    return (
      < LoginForm />
    );
  }
}

export default App;