// import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import './AboutUs.css';
// import {
//     FaFacebookSquare,
//     FaInstagramSquare,
//     FaTwitterSquare,
//     FaGithubSquare,
//     FaLinkedin
// } from "react-icons/fa";
// import saleem from './img/saleem.jfif';
// import dena from './img/dena.jfif';
// import mahmoud from './img/mahmoud.jfif';
// import suad from './img/suad.jfif';
// import img from './img3.webp'
//  class AboutUs extends Component {
//     render() {
//         return (
//             <>
//                 <img src={img}></img>
//                 <div className="AboutUs-MainCard">
//                     <div className="blink">
//                         Meet Our Team
//                     </div>
//                     <div className="inner-div">
//                         <Card style={{ width: '18rem' }} className='AboutUs-card'>
//                             <Card.Img variant="top" className='AboutUS-image'
//                                 src={suad} />
//                             <Card.Body>
//                                 <Card.Title className="teamMemberName" style={{}}> Suad Talafha </Card.Title>
//                                 <Card.Text>
//                                     Full Stack Developer &&
//                                     Renewable energy engineer
//                                 </Card.Text>
//                                 <Nav.Link eventKey={2} href="https://www.linkedin.com/" target="_blank">  <FaLinkedin className="icons_footer" /></Nav.Link>
//                                 <Nav.Link eventKey={2} href="" target="_blank"> <FaGithubSquare className="icons_footer" /></Nav.Link>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                     <div className="inner-div">
//                         <Card style={{ width: '18rem' }} className='AboutUs-card'>
//                             <Card.Img variant="top" className='AboutUS-image'
//                                 src={saleem} />
//                             <Card.Body>
//                                 <Card.Title className="teamMemberName" style={{}}> Saleem Diab </Card.Title>
//                                 <Card.Text>
//                                     Full Stack Developer &&
//                                     <br></br>
//                                     Civil Engineer
//                                 </Card.Text>
//                                 <Nav.Link eventKey={2} href="https://www.linkedin.com/" target="_blank">  <FaLinkedin className="icons_footer" /></Nav.Link>
//                               <Nav.Link eventKey={2} href="" target="_blank"> <FaGithubSquare className="icons_footer" /></Nav.Link>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                     <div className="inner-div">
//                         <Card style={{ width: '18rem' }} className='AboutUs-card'>
//                             <Card.Img variant="top" className='AboutUS-image'
//                                 src={mahmoud} />
//                             <Card.Body>
//                                 <Card.Title className="teamMemberName" style={{}}>
//                                     Mahmoud Khader </Card.Title>
//                                 <Card.Text>
//                                     Full Stack Developer &&
//                                     Civil engineer
//                                 </Card.Text>
//                                 <Nav.Link eventKey={2} href="https://www.linkedin.com/" target="_blank">  <FaLinkedin className="icons_footer" /></Nav.Link>
//                               <Nav.Link eventKey={2} href="" target="_blank"> <FaGithubSquare className="icons_footer" /></Nav.Link>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                     <div className="inner-div">
//                         <Card style={{ width: '18rem' }} className='AboutUs-card'>
//                             <Card.Img variant="top" className='AboutUS-image'
//                                 src={dena} />
//                             <Card.Body>
//                                 <Card.Title className="teamMemberName" > Dena Kofahi
//                                 </Card.Title>
//                                 <Card.Text>
//                                     Full Stack Developer &&
//                                     <br></br>
//                                 </Card.Text>
//                                 <Nav.Link eventKey={2} href="https://www.linkedin.com/" target="_blank">  <FaLinkedin className="icons_footer" /></Nav.Link>
//                               <Nav.Link eventKey={2} href="" target="_blank"> <FaGithubSquare className="icons_footer" /></Nav.Link>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// export default AboutUs