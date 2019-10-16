import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Users from './containers/Users'
import Books from './containers/Books'
import Computers from './containers/Computers';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';


class App extends React.Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
}

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer/>
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: '4%' }}>
        </main>
        <div className="users"><Users /></div>
        <div className="books"><Books /></div>
        <div className="computers"><Computers /></div>
      </div >

    );
  }
}








export default App;
