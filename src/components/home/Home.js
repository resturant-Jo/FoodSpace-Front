import React, { Component } from "react";
// import video11 from "./video.mp4"
import './home.css'
import img from './space2.png'
import img2 from './food.jpg'
import img3 from './food2.jpg'
import { Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import Contactus from "../contactus/Contactus";
const Home = () => {
  return (
    <>
      <h2 className="h2">  Space Food For You Any Time !!
      </h2>
      <section className="sec1">
        <img className='logoSec' src={img}></img>
            <p  id="spacefood" className="parg"> SPACE FOOD</p>
            <hr/>
            <hr/>
        <p className="parg">
          is a leading online food delivery marketplace, connected restaurants in JORDAN.
          To Visit Our Resturants <Link to='/restaurants'>
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
        <img className="img3" src="https://media.istockphoto.com/photos/pan-fried-duck-picture-id1081422898?k=20&m=1081422898&s=612x612&w=0&h=YkfQqtV3nN1gB_HaehyvjcTEye7w9FBPkG-PIKdDzPo=">
        </img>

        <p className="parg3">
          <h2>
            Every Flavor Welcome
          </h2>
          From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across Jordan.        </p>
          <br style={{clear:"both"}}/>
      </section>

      <div class="image1"></div>

      <section className="sec2">
        <img className="img1" src="https://image.cnbcfm.com/api/v1/image/106436941-1583942201563gettyimages-748332225.jpeg?v=1583942245">
        </img>
        <p className="parg2">
          <h2>
            It’s all here.
            All in one app.
          </h2>
          Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
        </p>
      </section>
      <section className="contactus">

      <h3 > Contact us</h3>
      <Contactus/>
      </section>
    </>
  );
};
export default Home;