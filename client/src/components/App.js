import React from 'react'
import { Card } from '@blueprintjs/core'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './Login';
import ControlPanel from './ControlPanel';
import CreateManagers from './CreateManagers';
import CreateProperties from './CreateProperties';
import Calendar from './Calendar';
import Calendars from './Calendars';
import Home from './Home';
import Layout from './Layout';
import Managerdnd from './Managerdnd';
import Assignmentdnd from './Assignmentdnd';
import './index.css';

const App = () => (
  <Router>
    <div>
      <RouteWithLayout exact path='/' component={Home} />
      <RouteWithLayout exact path="/login" component={Login} />
      <RouteWithLayout path="/controlPanel" component={ControlPanel} />
      <RouteWithLayout path="/createManagers" component={CreateManagers} />
      <RouteWithLayout path="/createProperties" component={CreateProperties} />
      <RouteWithLayout exact path="/calendar" component={Calendar} />
      <RouteWithLayout exact path="/calendars" component={Calendars} />
      <RouteWithLayout exact path="/managerdnd" component={Managerdnd} />
      <RouteWithLayout exact path="/assignmentdnd" component={Assignmentdnd} />
    </div>
  </Router>
)

const RouteWithLayout = ({path, component: Component}) => {
  return (
    <Route path={path} render={props => (<Layout>
      <Component {...props} />
    </Layout>)}/>
  )
}

export default App;