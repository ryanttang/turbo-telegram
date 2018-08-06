import React, { PureComponent } from 'react';
import { Card, InputGroup, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core';
import { AnchorButton, Classes, Code, Dialog, H5, Intent, Switch, Tooltip } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";
import { Link, Route } from 'react-router-dom';
// import Dashboard from 'react-dazzle';
import Sidemenu from './Sidemenu';


class Layout extends PureComponent {
  state = {show: false}
  showModal = () => {
    this.setState({ isOpen: true });
  }
  
  hideModal = () => {
    this.setState({ isOpen: false });
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
            <Link to>
              <Button  className="bp3-minimal"  onClick={this.showModal} icon="person" text="Login" />
              </Link>
              <Dialog
                className="bp3-dark"
                icon="info-sign"
                onClose={this.hideModal}
                title="Turbo-Telegram"
                {...this.state} >
           
                <div className={Classes.DIALOG_BODY}>
                <div>
                  <h2>Login</h2>
                  <h4>Username:<InputGroup 
                    leftIcon="tag"
                    placeholder="Please enter your username..."/></h4>
                  <h4>Password:<InputGroup 
                    leftIcon="lock"
                    placeholder="Please enter your password..."/></h4>
                  <Button>Sign In</Button>
                </div>
              </div>
                <div className={Classes.DIALOG_FOOTER}>
                    <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                        <Tooltip content="This button is hooked up to close the dialog.">
                            <Button onClick={this.hideModal}>Close</Button>
                        </Tooltip>
                       
                    </div>
                </div>
            </Dialog>
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