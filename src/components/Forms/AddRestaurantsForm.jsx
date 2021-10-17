import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import Auth from '../login/auth';

export default function AddRestaurantsForm({ handleSubmit, handleChange }) {
  return (
    <Card className="mainItem" style={{backgroundColor:"#76c393"}}>
      <h3>Add New Restuarant</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label>Resturant Name</label>
          <InputGroup
            onChange={handleChange}
            name="name"
            id="text-input"
            placeholder="Restuarant Name"
          />
         <lable>Image </lable>
         <InputGroup
            onChange={handleChange}
            name="image"
            id="text-input"
            placeholder="Restuarant Image"
          />
          <label>Food Type</label>
          <InputGroup
            onChange={handleChange}
            name="foodType"
            id="text-input"
            placeholder="Food Type"
          />

          <lable>Location </lable>
          <InputGroup
            onChange={handleChange}
            name="location"
            id="text-input"
            placeholder="Location"
          />

          <lable>Description </lable>
          <InputGroup
            onChange={handleChange}
            name="description"
            id="text-input"
            placeholder="Description"
          />


          {/* <Auth capability="create"> */}
<div >
          <Button style={{backgroundColor:"gray"}} className='button' type="submit">Add Restuarant</Button>
          </div>
          {/* </Auth> */}
        </FormGroup>
      </form>
    </Card>
  );
}