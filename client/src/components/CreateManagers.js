import React, { Component } from 'react';
import { Button, InputGroup, FileInput } from "@blueprintjs/core";

class CreateManagers extends Component {
  submitForm = (e) => {
    e.preventDefault();
  }
  render() {
    return (

      <form onSubmit={this.submitForm}>
        <h1>Create Managers</h1>
        <div class="grid-container1">
          <h4>First Name:<InputGroup className="grid-item1"
            leftIcon="person"
            placeholder="Please enter manager name..." /></h4>
          <h4>Last Name:<InputGroup className="grid-item1"
            leftIcon="person"
            placeholder="Please enter manager name..." /></h4>
        </div>
        <div class="grid-container1">
          <h4>E-mail:<InputGroup className="grid-item1"
            leftIcon="envelope"
            placeholder="Please enter manager e-mail..." /></h4>
          <h4>Phone:<InputGroup className="grid-item1"
            leftIcon="phone"
            placeholder="Please enter manager phone..." /></h4>
        </div>
        <div class="grid-container1">
          <h4>Password:<InputGroup className="grid-item1"
            leftIcon="lock"
            placeholder="Please enter manager password..." /></h4>
          <h4>Confirm Password:<InputGroup className="grid-item1"
            leftIcon="lock"
            placeholder="Please re-enter manager password..." /></h4>
        </div>
        <h4>Address:<InputGroup className="grid-item2"
          leftIcon="geolocation"
          placeholder="Please enter manager address..." /></h4>
        <h4>Address 2:<InputGroup className="grid-item2"
          leftIcon="geolocation"
          placeholder="Please enter manager address..." /></h4>
        <Button>Create</Button>
        <div class="person">
          <img src="./person.png" width="300" alt="person placeholder" />
          <center><FileInput disabled={false} text="Choose file..." /></center>
        </div>
      </form>

    )
  }
}

export default CreateManagers;