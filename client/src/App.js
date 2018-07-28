import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Tooltip
} from 'react-router-dom'
import { Button, Intent, Spinner } from "@blueprintjs/core";




const Login = () => (
  <div>
    <h2>Login</h2>
    {React.createElement(Button, { intent: Intent.SUCCESS }, "Sign In")}
  </div>
)

const ControlPanel = ({ match }) => (
  <div>
    <h3>Control Panel</h3>
  </div>
)

const CreateManagers = () => (
  <div>
    <h2>Create Managers</h2>
  </div>
)

const CreateProperties = ({ match }) => (
  <div>
    <h2>Create Properties</h2>
  </div>
)

const Calendar = ({ match }) => (
  <div>
    <h2>Calender</h2>
    <h3>{match.params.calendarId}</h3>
  </div>
)

const Calendars = ({ match }) => (
  <div>
    <h2>Property Schedule</h2>
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
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/ControlPanel">Control Panel</Link></li>
        <li><Link to="/CreateManagers">Create Managers</Link></li>
        <li><Link to="/CreateProperties">Create Properties</Link></li>
        <li><Link to="/Calendar">Calendar</Link></li>
        <li><Link to="/Calendars">Calendars</Link></li>
        
      </ul>

      <hr/>

      <Route exact path="/" component={Login} large={true}/>
      <Route path="/ControlPanel" component={ControlPanel}/>
      <Route path="/CreateManagers" component={CreateManagers}/>
      <Route path="/CreateProperties" component={CreateProperties}/>
      <Route path="/Calendar" component={Calendar}/>
      <Route path="/Calendars" component={Calendars}/>
    </div>
  </Router>
)
export default BasicExample