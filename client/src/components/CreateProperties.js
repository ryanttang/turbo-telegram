import React from 'react';
import Layout from './Layout';
import { Button, Intent, InputGroup, Dialog, FileInput, MenuItem, Menu} from "@blueprintjs/core";

  const CreateProperties = () => (
    <div>
      <div class="grid-container1">
       <div>
        <br></br>
        <h1>Create Property</h1>
        <h4>Property Name:<InputGroup className="grid-item"
          leftIcon="home"
          placeholder="Please enter property name..."/></h4>
           <h4>Amount of Units:<InputGroup className="grid-item"
          leftIcon="home"
          placeholder="Please enter total amount of units..."/></h4>
        </div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4>Property Phone:<InputGroup className="grid-item"
            leftIcon="phone"
            placeholder="Please enter property phone number..."/></h4>
          <h4>Property Manager:<Menu className="grid-item">
            <MenuItem
              icon="person"
              rightIcon="caret-down"
              text="Assign a manager to this property" >
                <MenuItem text="Manager 1" />
                <MenuItem text="Manager 2" />
                <MenuItem text="Manager 3" />
            </MenuItem>
        </Menu></h4>

        </div>
          <div class="image">
            <h4><img src="./property.png" width="180" height="180" />
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

export default CreateProperties;