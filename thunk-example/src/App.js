import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './containers/Users';
import Books from './containers/Books';
import Computers from './containers/Computers';
import { Layout } from './components/Layout';
import {NavigationBar} from './components/NavigationBar'


class App extends React.Component {

  
  render() {  
    return (
    <React.Fragment>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/computers" component={Computers} />
        </Switch>
      </Router>
    </React.Fragment>
    )
  }
}








export default App;
