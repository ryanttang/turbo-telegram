import React from 'react';
import { Card, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

const Layout = props =>
  <div>
    <Navbar fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Turbo-Telegram</Navbar.Heading>
        <Navbar.Divider />
        <Link to="/">
        <Button className="bp3-minimal" icon="home" text="Home"/>
        </Link>
        <Link to="/login">
        </Link>
        <Link to="/controlPanel">Control Panel</Link>
        <Link to="/createManagers">Create Managers</Link>
        <Link to="/createProperties">Create Properties</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/calendars">Calendars</Link>

      </Navbar.Group>
    </Navbar>
    <Card interactive={true} elevation={Elevation.TWO}>
      {props.children}
    </Card>
  </div>

export default Layout;