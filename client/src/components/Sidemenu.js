import React, {PureComponent} from 'react';

import { Menu, Button, Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: "/controlPanel",
    icon: 'control',
    text: 'Control Panel'
  },
  {
    path: "/createManagers",
    icon: 'asterisk',
    text: 'Create Managers'
  },
  {
    path: '/createProperties',
    icon: 'office',
    text: 'Create Properties'
  },
  {
    path: "/calendar",
    icon: "calendar",
    text: "Calendar"
  },
  {
    path: "/calendars",
    icon: "chart",
    text: "Stats"
  }
];

class Sidemenu extends PureComponent {
  render() {
    return (
      <Card className="sidemenu">
        <Menu>
          {routes.map(x => <Link to={x.path} key={x.path}>
              <Button className="bp3-minimal" icon={x.icon} text={x.text} />
              <Menu.Divider/>
            </Link>
          )}
          </Menu>
      </Card>
    );
  }
}


export default Sidemenu;