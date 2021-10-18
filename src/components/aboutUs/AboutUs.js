import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Container, Nav, Navbar } from "react-bootstrap";
import './AboutUs.css';
// import {
//     FaFacebookSquare,
//     FaInstagramSquare,
//     FaTwitterSquare,
//     FaGithubSquare,
//     FaLinkedin
// } from "react-icons/fa";
// import saleem from '../img/saleem.jpg';
// import dena from '../img/dena.jpg';
// import mahmoud from '../img/mahmoud.jpg';
// import suad from '../img/suad.jpg';
import img from './img3.png'
class AboutUs extends Component {
    render() {
        return (
            <>
<div class="title12">
 <h2>About<br/>Us</h2>
</div>            <section> 
                <p className="whoweare">
                We are an online food ordering service that helps customers find restaurants in their area, filter by cuisine, browse menus and place their orders with an option of online payment or cash on delivery.
<hr/>
                Our main aim is to become and remain the market leader in the MENA region by diversifying our services portfolio and providing best-in-class customer experience.

                </p>
                {/* <img alt="img" src={img}></img> */}
            </section>
                <section id="team" class="team_member section-padding" id="meetourteam" >
    <div class="container" >            
        <div class="section-title text-center">
            <h1 >Meet our Team</h1>
        </div>              
        <div class="row text-center">
            <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
                <div class="our-team">
                    <div class="team_img">
                        <img alt="img" src="https://avatars.githubusercontent.com/u/82364465?v=4" alt="team-image"></img>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="team-content">
                        <h3 class="title">Mahmoud Khader</h3>
                        <h3>Team Leader</h3>
                        <span class="post">Civil Engineer&Full-Stack Developer</span>
                    </div>
                </div>
            </div>                                                  
            <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
                <div class="our-team">
                    <div class="team_img">
                        <img alt='img' src="https://ca.slack-edge.com/TNGRRLUMA-U01TXMV6X5Z-023ff6873743-512" alt="team-image"></img>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="team-content">
                        <h3 class="title">Suad Talafha</h3>
                        <h3>Team Member</h3>
                        <span class="post">Renewable Energy Engineer&Full-Stack Developer </span>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
                <div class="our-team">
                    <div class="team_img">
                        <img alt='img' src="https://avatars.githubusercontent.com/u/82366428?v=4" alt="team-image"></img>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="team-content">
                        <h3 class="title">Saleem Diab</h3>
                        <h3>Team Member</h3>
                        <span class="post">Civil Engineer&Full-stack Developer</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset="0">
                <div class="our-team">
                    <div class="team_img">
                        <img alt='img' src="https://avatars.githubusercontent.com/u/82310640?v=4" alt="team-image"></img>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="team-content">
                        <h3 class="title">Dena Kofahi</h3>
                        <h3>Team Member</h3>
                        <span class="post">Business Adminstaration&Full-stack Developer </span>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
            </div>
        </div>
    </div>  
</section>
            </>
        )
    }
}
export default AboutUs