import React from 'react';
import { Button, Intent, InputGroup } from "@blueprintjs/core";
import Layout from './Layout'

const Login = () => (
  <div>
    <h2>Login</h2>
    <h4>Username:<InputGroup className="grid-item1"
      leftIcon="person"
      placeholder="Please enter your username..."/></h4>
    <h4>Password:<InputGroup className="grid-item1"
      leftIcon="lock"
      placeholder="Please enter your password..."/></h4>
    <Button>Sign In</Button>
  </div>
)

export default Login