/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Footer.css'
// import{
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaTwitterSquare,
//   FaGithubSquare
// } from "react-icons/fa"
function Footer() {
  return (
    <div>
<section id="footer">
<footer class="footer-distributed">
            <div class="footer-left">
                <h3>Space Food</h3>
                <p class="footer-links">
                    <a href="/">Home</a>
                    <a href="resturants">Resturants</a>
                    <a href="/aboutus">About Us</a>
                    <a href="/profile">Profile</a>
                    <a href="/cart">Cart</a>
                </p>
                <p class="footer-company-name">Space Food © 2021</p>
            </div>
            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>444 S. Amman</span> Amman, Jordan</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p>+962-796-340955</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@Spacefood.com</a></p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>About the company</span>
                    Space Food is place which you can find your favorite cuisines and food and we can reach you any where in Jordan
                </p>
                <div class="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </div>
        </footer>
    </section>
    </div>
  )
}
export default Footer;