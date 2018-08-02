import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import Login from './Login';
import ControlPanel from './ControlPanel';
import CreateManagers from './CreateManagers';
import CreateProperties from './CreateProperties';
import Calendar from './Calendar';
import Calendars from './Calendars';
import Home from './Home';

const App = () => (
  <Router>
    <div className="bp3-dark">
      
      <hr />
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path="/login" component={Login} large={true} />
        <Route path="/controlPanel" component={ControlPanel} />
        <Route path="/createManagers" component={CreateManagers} />
        <Route path="/createProperties" component={CreateProperties} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/calendars" component={Calendars} />
      </div>
    </div>
  </Router>
)


export default App