import React from 'react';
import { Card, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

const divStyle = {
  margin: '0',
  width: '480px',
  height: '50px'
};

const navStyle = {

};

const Layout = props =>
  <div> 
    <Navbar style={navStyle} fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Turbo-Telegram</Navbar.Heading>
      <Navbar.Divider />
        <Link to="/">
        <Button className="bp3-minimal" icon="home" text="Home"/>
        </Link>
        <Link to="/login">
        <Button className="bp3-minimal" icon="person" text="Login"/>
        </Link>
        <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Divider />
        <Link to="/controlPanel">
        <Button className="bp3-minimal" icon="control" text="Control Panel"/>
        </Link>
        <Link to="/createManagers">
        <Button className="bp3-minimal" icon="asterisk" text="Create Managers"/>
        </Link>
        <Link to="/createProperties">
        <Button className="bp3-minimal" icon="office" text="Create Properties"/>
        </Link>
        <Link to="/calendar">
        <Button className="bp3-minimal" icon="calendar" text="Calendar"/>
        </Link>
        <Link to="/calendars">
        <Button className="bp3-minimal" icon="chart" text="Statistics"/>
        </Link>
      </Navbar.Group>
    </Navbar>

    <Card interactive={true} elevation={Elevation.TWO}>
      {props.children}
    </Card>
</div>

export default Layout;