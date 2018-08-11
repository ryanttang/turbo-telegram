import React, { Component } from "react";
import Layout from './Layout';
import { Button, Intent, InputGroup, Dialog, FileInput, MenuItem, Menu, Popover } from "@blueprintjs/core";



class CreateProperties extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    property_name: "",
    property_units: "",
    property_phone: "",
    property_manager: "Please select a manager for this property",
    property_address1: "",
    property_address2: ""
  };

  updateValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

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
              value={this.state.property_name} name='property_name' onChange={this.updateValue} /></h4>
            <h4>Amount of Units:<InputGroup className="grid-item"
              leftIcon="home"
              placeholder="Please enter total amount of units..."
              value={this.state.property_units} name='property_units' onChange={this.updateValue} /></h4>
          </div>
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>Property Phone:<InputGroup className="grid-item1"
              leftIcon="phone"
              placeholder="Please enter property phone number..."
              value={this.state.property_phone} name='property_phone' onChange={this.updateValue} /></h4>

            <h4>Property Manager:<br /><Popover className="grid-item1" content={<Menu className="grid-item1">
              <Menu.Item icon="person" onClick={() => { this.setState({ property_manager: "manager A" }) }} text="manager A" />
              <Menu.Item icon="person" onClick={() => { this.setState({ property_manager: "manager B" }) }} text="manager B" />
              <Menu.Item icon="person" onClick={() => { this.setState({ property_manager: "manager C" }) }} text="manager C" />
            </Menu>}><Button className="grid-item1" icon="share" text={this.state.property_manager} />
            </Popover></h4>
          </div>
          <div className="image">
            <h4><img src="./property.png" width="180" height="180" />
              {/* <FileInput id="loadimage" disabled={false} text="Choose file..." /> */}
            </h4>
          </div>
        </div>
        <div>
          <h4>Address:<InputGroup className="grid-item2"
            leftIcon="geolocation"
            placeholder="Please enter manager address..."
            value={this.state.property_address1} name='property_address1' onChange={this.updateValue} /></h4>
          <h4>Address 2:<InputGroup className="grid-item2"
            leftIcon="geolocation"
            placeholder="Please enter manager address..."
            value={this.state.property_address2} name='property_address2' onChange={this.updateValue} /></h4>

          {/* The line below logs the current state to the console - this should be replaced by route to add this property to the database */}
          <Button icon="refresh" onClick={() => { console.log(this.state) }}>Create</Button>

        </div>
      </div>



    );
  }
};

export default CreateProperties;