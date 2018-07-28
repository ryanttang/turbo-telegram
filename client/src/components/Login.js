import React from 'react';
import { Button, Intent } from "@blueprintjs/core";

const Login = () => (
    <div>
        <h2>Login</h2>
        {React.createElement(Button, { intent: Intent.SUCCESS }, "Sign In")}
    </div>
)

export default Login