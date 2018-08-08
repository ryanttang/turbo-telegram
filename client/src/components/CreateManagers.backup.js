import React from 'react';
import Layout from './Layout';
import { Button, Intent, InputGroup, Dialog, FileInput} from "@blueprintjs/core";

const CreateManagers = () => (
  <div>
    <div class="grid-container1">
     <div>
      <br></br>
      <h1>Create Managers</h1>
        <h4>First Name:<InputGroup className="grid-item"
          leftIcon="person"
          placeholder="Please enter manager name..."/></h4>
          <h4>E-mail:<InputGroup className="grid-item"
          leftIcon="envelope"
          placeholder="Please enter manager e-mail..."/></h4>
          <h4>Password:<InputGroup className="grid-item"
          leftIcon="lock"
          placeholder="Please enter manager password..."/></h4>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4>Last Name:<InputGroup className="grid-item1"
          leftIcon="person"
          placeholder="Please enter manager name..."/></h4>
        <h4>Phone:<InputGroup className="grid-item1"
          leftIcon="phone"
          placeholder="Please enter manager phone..."/></h4>
          <h4>Confirm Password:<InputGroup className="grid-item1"
        leftIcon="lock"
        placeholder="Please re-enter manager password..."/></h4>
      </div>
        <div class="image">
          <h4><img src="./person.png" width="180" height="180" />
          <FileInput id="loadimage" disabled={false} text="Choose file..." /></h4>
        </div>
    </div>
    <div>
      <h4>Address:<InputGroup className="grid-item2"
        leftIcon="geolocation"
        placeholder="Please enter manager address..."/></h4>
      <h4>Address 2:<InputGroup className="grid-item2"
        leftIcon="geolocation"
        placeholder="Please enter manager address..."/></h4>  
      <Button>Create</Button>
    </div>
    </div>
  )

export default CreateManagers;