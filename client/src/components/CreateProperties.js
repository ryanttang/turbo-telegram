import React from 'react';
import { Button, InputGroup, FileInput } from "@blueprintjs/core";

const CreateProperties = () => (
  <div>
    <h1>Create Properties</h1>
    <div class="grid-container1">
      <h4>Property Name:<InputGroup className="grid-item1"
        leftIcon="tag"
        placeholder="Please enter property name..." /></h4>
      <h4>Property Phone:<InputGroup className="grid-item1"
        leftIcon="phone"
        placeholder="Please enter property phone number..." /></h4>
    </div>

    <div class="grid-container1">
      <h4>Amount of Units:<InputGroup className="grid-item1"
        leftIcon="numbered-list"
        placeholder="Please enter total amount of units..." /></h4>
      &nbsp;&nbsp;&nbsp;<h4>Assign Manager:<Button className="grid-item1"
        icon="film"
        rightIcon="caret-down"
        text="Please assign a manager to this property"
        disabled={false} /></h4>
    </div>


    <h4>Address:<InputGroup className="grid-item2"
      leftIcon="geolocation"
      placeholder="Please enter property address..." /></h4>
    <h4>Address 2:<InputGroup className="grid-item2"
      leftIcon="geolocation"
      placeholder="Please enter property address..." /></h4>
    <Button>Create</Button>
    <div class="person">
      <img src="./property.png" width="300" alt="house placeholder" />
      <center><FileInput disabled={false} text="Choose file..." /></center>
    </div>
  </div>
)

export default CreateProperties;