import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './Containers/Users';
import Books from './Containers/Books';
import Computers from './Containers/Computers';
import { Layout } from './Components/Layout';
import {NavigationBar} from './Components/NavigationBar'


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
