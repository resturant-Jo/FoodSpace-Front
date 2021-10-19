import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import Auth from '../login/auth';

export default function AddFoodForm({ handleSubmit, handleChange }) {
  return (
    <>
   

    <Card className="mainItem" style={{backgroundColor:"#76c393"}}>
      <h3>Add New Food</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label>Food Name</label>
          <InputGroup
            onChange={handleChange}
            name="name"
            id="text-input"
            placeholder="Food Name"
          />
          <label>Food Image</label>
          <InputGroup
            onChange={handleChange}
            name="image"
            id="text-input"
            placeholder="Food Image"
          />

          <lable>Description </lable>
          <InputGroup
            onChange={handleChange}
            name="description"
            id="text-input"
            placeholder="Description"
          />

          <lable>Price </lable>
          <InputGroup
            onChange={handleChange}
            name="price"
            id="text-input"
            type="number"
            placeholder="Price"
          />
          <lable>Restuarant Name </lable>
          <InputGroup
            onChange={handleChange}
            name="restuarantName"
            id="text-input"
            type="text"
            placeholder="restuarant Name"
          />
 {/* <InputGroup onChange={handleChange} placeholder="restuarantId" type="number" name="restuarantId" /> */}

          {/* <Auth capability="create"> */}
<div >
          <Button style={{backgroundColor:"grey"}} className='button' type="submit">Add Food</Button>
          </div>
          {/* </Auth> */}
        </FormGroup>
      </form>
    </Card>
    </>
  );
}