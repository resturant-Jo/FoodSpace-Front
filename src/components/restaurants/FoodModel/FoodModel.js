import "bootstrap/dist/css/bootstrap.min.css";
import "./model.css";

import {
  Modal,
  Button,
  ListGroup,
  ListGroupItem,
  Tab,
  Tabs,
  Card,
} from "react-bootstrap";



function FoodModel(props) {
    return (
      <div>
{/* {console.log(props.food)}
{console.log(props.foodModel)} */}

  <Modal
  style={{}}
  show={props.show}
  onHide={props.handleClose}
  className="main-modal"
  >

        <Modal.Body className="body-modal" >

          <Tabs
            defaultActiveKey="Details"
            id="uncontrolled-tab-example"
            className="mb-3"
            // style={{ color: "#201e23 " }}
            >

            <Tab eventKey="Details" title="Details"  style={{width:"300px"}}>
              <h2 className="movie-title">{props.foodModel.name}</h2>
              <Card.Img  src={props.foodModel.image}/>
              <ListGroup>
                <ListGroupItem
                  style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
                  className="list-group-flush"
                  >{`Food Description : ${props.foodModel.description}`}</ListGroupItem>
                <ListGroupItem
                  style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
                  className="list-group-flush"
                  >{`Price : ${props.foodModel.price} JD`}</ListGroupItem>
               
              </ListGroup>
            </Tab>
          </Tabs>
          <Modal.Footer
            className="footer-modal"
            style={{ borderTop: "0px solid #dee2e6" }}
            >
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <br/>
            <Button variant="secondary" onClick={() => props.deleteFood(props.foodModel.id)}>
              Delete
            </Button>
            <br/>
            <Button variant="secondary" onClick={() => props.handleAddToCart(props.foodModel.id)}>
              Add to cart
            </Button>
            <Button variant="secondary" onClick={() => props.handleAddToFav(props.foodModel.id)}>
              Add to fav
            </Button>
          </Modal.Footer>

        </Modal.Body>
      </Modal>

      </div>
    );
  }


export default FoodModel;