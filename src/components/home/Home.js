import React, { Component } from "react";
// import video11 from "./video.mp4"
import './home.css'
import img from './space2.png'
import img2 from './food.jpg'
import img3 from './food2.jpg'
import { Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h2 className="h2">  Space Food For You Any Time !!
      </h2>
      <section className="sec1">
        <img className='logoSec' src={img}></img>
        <p className="parg">
          SPACE FOOD is a leading online food delivery marketplace, connected restaurants in JORDAN.
          To Visit Our Resturants :point_right:   <Link to='/restaurants'>
            <Button className="bp4-minimal" text="Restaurants" />
          </Link>
        </p>
      </section>
      <section className="sec2">
        <img className="img1" src={img2}>
        </img>
        <p className="parg2">
          <h2>
            It’s all here.
            All in one app.
          </h2>
          Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
        </p>
      </section>
      <section className="sec3">
        <img className="img3" src={img3}>
        </img>
        <p className="parg3">
          <h2>
            Every Flavor Welcome
          </h2>
          From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across Jordan.        </p>
      </section>
    </>
  );
};
export default Home;