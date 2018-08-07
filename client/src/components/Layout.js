import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Card, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import LoginModal from './LoginModal';

import LoginStore from '../store/LoginStore';

class Layout extends Component {

  render() {
    return (
      <Card className="bp3-dark" id="fullpage">
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
          
            <Navbar.Heading><img className="logo" src="./logo1.png" alt='logo' />&nbsp;&nbsp;Turbo-Telegram</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/">
              <Button className="bp3-minimal" icon="home" text="Home" />
            </Link>
            {/* Link goes nowhere but for continuity I wrapped the Button in a Link tag so it will appear blue just like the Home button.  */}
            { 
              LoginStore.loggedIn ?
              <Link to="">
              <Button className="bp3-minimal" onClick={this.logOut} icon="person" text="log-out" />
            </Link>
            : <Link to="">
              <Button className="bp3-minimal" onClick={this.toggleModal} icon="person" text="Login" />
            </Link>
            }
              <LoginModal store={LoginStore}/>
          </Navbar.Group>
        </Navbar>
        <div className="grid">
          <Sidemenu location={this.props.location} />
          <Card elevation={Elevation.ONE} className="content">
            {this.props.children}
          </Card>
        </div>
      </Card>
    )
  }
}

Layout = observer(Layout);

export default Layout;