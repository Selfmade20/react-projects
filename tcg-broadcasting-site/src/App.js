import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Login from  './containers/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './containers/Posts'



class App extends Component {
  render() {
    return (
      < Login />
    );
  }
}

export default App;