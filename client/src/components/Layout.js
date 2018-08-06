import React, { PureComponent } from 'react';
import { Card, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import LoginModal from './LoginModal';


class Layout extends PureComponent {
  state = {
    showModal: false,
    loggedIn: true
  }
  
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  logOut = () => {
    this.setState({loggedIn: false })
  }

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
            {/* Link goes nowhere but for continuity I wrapped the Button in a Link tag so it will appear blue just like the Home button.  */}
            { 
              this.state.loggedIn ?
              <Link to="">
              <Button className="bp3-minimal" onClick={this.logOut} icon="person" text="log-out" />
            </Link>
            : <Link to="">
              <Button className="bp3-minimal" onClick={this.toggleModal} icon="person" text="Login" />
            </Link>
            }
              <LoginModal show={this.state.showModal} toggleModal={this.toggleModal}/>
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