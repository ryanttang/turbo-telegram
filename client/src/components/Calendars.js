import React from 'react'
import { Route, Link } from 'react-router-dom';
import Layout from './Layout';

import Calendar from './Calendar';

const Calendars = ({ match }) => (
    <div>
      <h1>Stats</h1>
      {/* <h2>Property Schedule</h2>
      <ul>
        <li>
          <Link to={`${match.url}/viewassignments`}>
            View Assignments
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/viewproperties`}>
            View Properties
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/userinfo`}>
            User Info
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.path}/:calendarId`} component={Calendar}/>
      <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
      )}/> */}
    </div>
  )

export default Calendars;