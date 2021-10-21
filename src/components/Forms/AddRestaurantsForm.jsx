import React from 'react';
import { Card, FormGroup } from '@blueprintjs/core';
// import Auth from '../login/auth';
import './AddResturant.css'
export default function AddRestaurantsForm({ handleSubmit, handleChange }) {
  return (
    <Card className="mainItem" >
      <form class="formRes" onSubmit={handleSubmit}>
        <h3>Add New Restuarant</h3>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <input onChange={handleChange} type="text" name="name" class="inputform" placeholder="Restuarant Name" />
          <input class="inputform" onChange={handleChange}
            name="image"
            id="text-input"
            placeholder="Restuarant Image" />
          <input
            onChange={handleChange}
            name="foodType"
            id="text-input"
            placeholder="Food Type"
          />
          <input
            onChange={handleChange}
            name="location"
            id="text-input"
            placeholder="Location"
          />
          <input
            onChange={handleChange}
            name="description"
            id="text-input"
            placeholder="Description"
          />
          <div >
            <button class="buttonadd" type="submit">Add Restuarant</button>
          </div>
        </FormGroup>
      </form>
    </Card>
  );
}