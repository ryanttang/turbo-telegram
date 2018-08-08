import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
import loginStore from '../store/LoginStore';
import { observer } from 'mobx-react';

const App = observer(() => (
  <Router>
    <div>
      <RouteWithLayout auth={true} exact path='/' component={Home} />
      <RouteWithLayout auth={loginStore.loggedIn} path="/controlPanel" component={ControlPanel} />
      <RouteWithLayout auth={loginStore.loggedIn} path="/createManagers" component={CreateManagers} />
      <RouteWithLayout auth={loginStore.loggedIn} path="/createProperties" component={CreateProperties} />
      <RouteWithLayout auth={loginStore.loggedIn} exact path="/calendar" component={Calendar} />
      <RouteWithLayout auth={loginStore.loggedIn} exact path="/calendars" component={Calendars} />
      <RouteWithLayout auth={loginStore.loggedIn} exact path="/managerdnd" component={Managerdnd} />
      <RouteWithLayout auth={loginStore.loggedIn} exact path="/assignmentdnd" component={Assignmentdnd} />
    </div>
  </Router>
))

const RouteWithLayout = ({path, component: Component, auth}) => {
  return ( auth &&
    <Route path={path} render={props => (<Layout>
      <Component {...props} />
    </Layout>)}/>
  )
}

export default App;