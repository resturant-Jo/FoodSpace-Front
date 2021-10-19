import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import Auth from '../login/auth';
import './AddForm.css'
export default function AddFoodForm({ handleSubmit, handleChange }) {
  return (
    <>
    <Card className="mainItem" >
      <form class="formfood"onSubmit={handleSubmit}>
      <h3 class="addFood">Add New Food</h3>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <input class="inputform"
            onChange={handleChange}
            name="name"
            id="text-input"
            placeholder="Food Name"
          />
          <input class="inputform"
            onChange={handleChange}
            name="image"
            id="text-input"
            placeholder="Food Image"
          />
          <input class="inputform"
            onChange={handleChange}
            name="description"
            id="text-input"
            placeholder="Description"
          />
          <input class="inputform"
            onChange={handleChange}
            name="price"
            id="text-input"
            type="number"
            placeholder="Price"
          />
          <input class="inputform"
            onChange={handleChange}
            name="restuarantName"
            id="text-input"
            type="text"
            placeholder="restuarant Name"
          />
 {/* <InputGroup onChange={handleChange} placeholder="restuarantId" type="number" name="restuarantId" /> */}
          {/* <Auth capability="create"> */}
<div >
          <button className='buttonadd' type="submit">Add Food</button>
          </div>
          {/* </Auth> */}
        </FormGroup>
      </form>
    </Card>
    </>
  );
}