// import "bootstrap/dist/css/bootstrap.min.css";
// import "./model.css";

// import {
//   Modal,
//   Button,
//   ListGroup,
//   ListGroupItem,
//   Tab,
//   Tabs,
//   Card,
// } from "react-bootstrap";



// function RestuarantModel(props) {
//     return (
//       <div>
// {console.log(props.restuarant)}
// {console.log(props.restuarantModel)}

//   <Modal
//   style={{}}
//   show={props.show}
//   onHide={props.handleClose}
//   className="main-modal"
//   >

//         <Modal.Body className="body-modal" style={{ padding: "0rem" }}>

//           <Tabs
//             defaultActiveKey="Details"
//             id="uncontrolled-tab-example"
//             className="mb-3"
//             // style={{ color: "#201e23 " }}
//             >

//             <Tab eventKey="Details" title="Details" className="tap">
//               <Card.Img src={props.restuarantModel.image}/>
//               <h2 className="movie-title">{props.restuarantModel.name}</h2>
//               <ListGroup>
//               <ListGroupItem
//                   style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
//                   className="list-group-flush"
//                   >{`Food Type  : ${props.restuarantModel.foodType} `}</ListGroupItem>
//                 <ListGroupItem
//                   style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
//                   className="list-group-flush"
//                   >{`Food Description : ${props.restuarantModel.description}`}</ListGroupItem>
//                 <ListGroupItem
//                   style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
//                   className="list-group-flush"
//                   >{`Restuarant Location : ${props.restuarantModel.location}`}</ListGroupItem>
               
               
//               </ListGroup>
//             </Tab>
//           </Tabs>
//           <Modal.Footer
//             className="footer-modal"
//             style={{ borderTop: "0px solid #dee2e6" }}
//             >
//             <Button variant="secondary" onClick={props.handleClose}>
//               Close
//             </Button>
//             <br/>
//             <Button variant="secondary" onClick={() => props.deleteRestuarant(props.restuarantModel.id)}>
//               Delete
//             </Button>
//           </Modal.Footer>

//         </Modal.Body>
//       </Modal>

//       </div>
//     );
//   }


// export default RestuarantModel;