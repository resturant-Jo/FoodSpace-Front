import "bootstrap/dist/css/bootstrap.min.css";
import "./model.css";
import Auth from "../../login/auth";
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
          // style={{ width: "565px" }}
          >

            <Tab eventKey="Details" title="Details" style={{ width: "500px" }}>
              {/* <h2 className="movie-title">{props.foodModel.name}</h2> */}
              <Card.Img src={props.foodModel.image} />
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
            <Button className="butModal" variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <br />

            <Auth capability="delete">
              <Button variant="secondary" onClick={() => props.deleteFood(props.foodModel.id)}>
                Delete
              </Button>
            </Auth>
            <br />
            <Button className="butModal" variant="secondary" onClick={() => props.handleAddToCart(props.foodModel.id)}>
              Add to cart
            </Button>
            <Button className="butModal" variant="secondary" onClick={() => props.handleAddToFav(props.foodModel.id)}>
              Add to fav
            </Button>
          </Modal.Footer>

        </Modal.Body>
      </Modal>

    </div>
  );
}


export default FoodModel;