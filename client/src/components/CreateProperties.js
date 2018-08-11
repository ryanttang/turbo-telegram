import React, { Component } from "react";
import { Button, InputGroup, Menu, Popover } from "@blueprintjs/core";

import { observer } from 'mobx-react';
import aptStore from '../store/ApartmentStore';


class CreateProperties extends Component {

  render() {
    return (
      <div>
        <div className="grid-container1">
          <div>
            <br></br>
            <h1>Create Property</h1>
            <h4>Property Name:<InputGroup className="grid-item"
              leftIcon="home"
              placeholder="Please enter property name..."
              value={aptStore.form.property_name} name='property_name' onChange={aptStore.updateValue} /></h4>
            <h4>Amount of Units:<InputGroup className="grid-item"
              leftIcon="home"
              placeholder="Please enter total amount of units..."
              value={aptStore.form.property_units} name='property_units' onChange={aptStore.updateValue} /></h4>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Property Phone:<InputGroup className="grid-item1"
              leftIcon="phone"
              placeholder="Please enter property phone number..."
              value={aptStore.form.property_phone} name='property_phone' onChange={aptStore.updateValue} /></h4>

            <h4>Property Manager:<br /><Popover className="grid-item1" content={<Menu className="grid-item1">
              <Menu.Item icon="person" onClick={() => aptStore.form.property_manager = "manager A" } text="manager A" />
              <Menu.Item icon="person" onClick={() => aptStore.form.property_manager = "manager B" } text="manager B" />
              <Menu.Item icon="person" onClick={() => aptStore.form.property_manager = "manager C" } text="manager C" />
            </Menu>}><Button className="grid-item1" icon="share" text={aptStore.form.property_manager} />
            </Popover></h4>
          </div>
          <div className="image">
            <h4><img src="./property.png" width="180" height="180" alt="property placeholder" />
              {/* <FileInput id="loadimage" disabled={false} text="Choose file..." /> */}
            </h4>
          </div>
        </div>
        <div>
          <h4>Address:<InputGroup className="grid-item2"
            leftIcon="geolocation"
            placeholder="Please enter manager address..."
            value={aptStore.form.property_address1} name='property_address1' onChange={aptStore.updateValue} /></h4>
          <h4>Address 2:<InputGroup className="grid-item2"
            leftIcon="geolocation"
            placeholder="Please enter manager address..."
            value={aptStore.form.property_address2} name='property_address2' onChange={aptStore.updateValue} /></h4>

          {/* The line below logs the current state to the console - this should be replaced by route to add this property to the database */}
          <Button icon="refresh" onClick={aptStore.createApt}>Create</Button>

        </div>
      </div>
    );
  }
};

CreateProperties = observer(CreateProperties);

export default CreateProperties;