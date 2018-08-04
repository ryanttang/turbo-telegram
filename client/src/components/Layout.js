import React, { PureComponent } from 'react';
import { Card, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core';
import { Link, Route } from 'react-router-dom';
// import Dashboard from 'react-dazzle';
import Sidemenu from './Sidemenu';

class Layout extends PureComponent {
  render() {
    return (
      <Card className="bp3-dark" id="fullpage">
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Turbo-Telegram</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/">
              <Button className="bp3-minimal" icon="home" text="Home" />
            </Link>
            <Link to="/login">
              <Button className="bp3-minimal" icon="person" text="Login" />
            </Link>
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

export default Layout;