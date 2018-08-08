import React, { Component } from "react";
import Layout from './Layout';
import { Button, Intent, InputGroup, Dialog, FileInput, MenuItem, Menu, Popover } from "@blueprintjs/core";



class CreateManagers extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    manager_first_name: "",
    manager_email: "",
    manager_password: "",
    manager_last_name: "",
    manager_phone: "",
    manager_contact_method: ""
  };

  updateValue = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

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
          value={this.state.manager_first_name} name='manager_first_name' onChange={this.updateValue}/></h4>
        <h4>E-mail:<InputGroup className="grid-item"
          leftIcon="envelope"
          placeholder="Please enter manager e-mail..."
          value={this.state.manager_email} name='manager_email' onChange={this.updateValue}/></h4>
        <h4>Password:<InputGroup className="grid-item"
          leftIcon="lock"
          placeholder="Please enter manager password..."
          value={this.state.manager_password} name='manager_password' onChange={this.updateValue}/></h4>
        </div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4>Last Name:<InputGroup className="grid-item1"
            leftIcon="person"
            placeholder="Please enter manager last name..."
            value={this.state.manager_last_name} name='manager_last_name' onChange={this.updateValue}/></h4>
          <h4>Phone:<InputGroup className="grid-item1"
            leftIcon="phone"
            placeholder="Please enter manager phone..."
            value={this.state.manager_phone} name='manager_phone' onChange={this.updateValue}/></h4>            
          <h4>Preferred contact method:<InputGroup className="grid-item1"
            leftIcon="phone"
            placeholder="Please enter manager contact method..."
            value={this.state.manager_contact_method} name='manager_contact_method' onChange={this.updateValue}/></h4>  
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
          value={this.state.property_address1} name='property_address1' onChange={this.updateValue}/></h4>
        <h4>Address 2:<InputGroup className="grid-item2"
          leftIcon="geolocation"
          placeholder="Please enter manager address..."
          value={this.state.property_address2} name='property_address2' onChange={this.updateValue}/></h4>

          {/* The line below logs the current state to the console - this should be replaced by route to add this manager to the database */}
        <Button icon="refresh" onClick={() => { console.log(this.state) }}>Create</Button> 

      </div>
      </div>



    );
  }
  };

export default CreateManagers;