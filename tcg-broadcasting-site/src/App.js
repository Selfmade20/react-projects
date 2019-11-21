import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import  Posts  from './components/Posts';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import User from './Containers/User/index';




function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <User/>
    </React.Fragment>
  );
}

export default App;
