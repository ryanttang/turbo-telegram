import React, { Component } from "react";
import { observer } from 'mobx-react'
import Layout from './Layout';
import { Button, Intent, InputGroup, Dialog, FileInput, MenuItem, Menu, Popover } from "@blueprintjs/core";

import managerStore from '../store/ManagersStore'

class CreateManagers extends Component {
  render() {
    return (
      <div>
        <div className="grid-container1">
          <div>
            <br></br>
            <h1>Create Manager</h1>
            <h4>First Name:<InputGroup className="grid-item"
              leftIcon="person"
              placeholder="Please enter first name..."
              value={managerStore.form.first_name} name='first_name' onChange={managerStore.updateValue} /></h4>
            <h4>E-mail:<InputGroup className="grid-item"
              leftIcon="envelope"
              placeholder="Please enter manager e-mail..."
              value={managerStore.form.username} name='username' onChange={managerStore.updateValue} /></h4>
            <h4>Password:<InputGroup className="grid-item"
              leftIcon="lock"
              placeholder="Please enter manager password..."
              value={managerStore.form.password} name='password' onChange={managerStore.updateValue} /></h4>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Last Name:<InputGroup className="grid-item1"
              leftIcon="person"
              placeholder="Please enter manager last name..."
              value={managerStore.form.last_name} name='last_name' onChange={managerStore.updateValue} /></h4>
            <h4>Phone:<InputGroup className="grid-item1"
              leftIcon="phone"
              placeholder="Please enter manager phone..."
              value={managerStore.form.phone} name='phone' onChange={managerStore.updateValue} /></h4>
            <h4>Preferred contact method:<InputGroup className="grid-item1"
              leftIcon="phone"
              placeholder="Please enter manager contact method..."
              value={managerStore.form.contact_method} name='contact_method' onChange={managerStore.updateValue} /></h4>
          </div>
          <div className="image">
            <h4><img src="./person.png" width="180" height="180" />
              {/* <FileInput id="loadimage" disabled={false} text="Choose file..." /> */}
            </h4>
          </div>
        </div>
        <div>
          <h4>Address:<InputGroup className="grid-item2"
            leftIcon="geolocation"
            placeholder="Please enter manager address..."
            value={managerStore.form.address_1} name='address_1' onChange={managerStore.updateValue} /></h4>
          <h4>Address 2:<InputGroup className="grid-item2"
            leftIcon="geolocation"
            placeholder="Please enter manager address..."
            value={managerStore.form.address_2} name='address_2' onChange={managerStore.updateValue} /></h4>

          {/* The line below logs the current state to the console - this should be replaced by route to add this manager to the database */}
          <Button icon="refresh" onClick={managerStore.createManager}>Create</Button>

        </div>
      </div>

    );
  }
};

CreateManagers = observer(CreateManagers)

export default CreateManagers;