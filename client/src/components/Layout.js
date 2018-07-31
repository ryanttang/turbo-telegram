import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';


const Layout = props =>
  <Card interactive={true} elevation={Elevation.TWO}>
    {props.children}
 </Card>

export default Layout;