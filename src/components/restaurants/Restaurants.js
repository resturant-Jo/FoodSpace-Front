/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import superagent from "superagent";
// import { Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { When } from "react-if";
import AddFoodForm from "../Forms/AddFoodForm";
import AddRestuarantsForm from "../Forms/AddRestaurantsForm";
import useForm from "../../hooks/form";
import useForm2 from "../../hooks/form2";
import { LoginContext } from "../../context/loginContext";
import "./Restaurants.css";
import { FoodStyle } from "./FoodStyle";
import FoodModel from "./FoodModel/FoodModel";
import RestuarantModel from "./FoodModel/RestuarantModel";
import Auth from "../login/auth";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
function Restaurants(props) {
  const loginContext = useContext(LoginContext);

  const [food, setFood] = useState([]);
  const [fav, setFav] = useState([]);
  const [foodArray, setFoodArray] = useState([]);
  const [foodModel, setFoodModel] = useState({});
  const [restuarantModel, setRestuarantModel] = useState({});
  const [restuarant, setRestuarant] = useState([]);
  // const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const { handleChange, handleSubmit } = useForm(addFood, addRestuarant);
  const { handleChange2, handleSubmit2 } = useForm2(addRestuarant);

  /////////////////////////////////////// FUNCTION FOR CSS THE SLIDES /////////////////////////////
  let settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  ////////////////////////////////////// END OF FUNCTION FOR CSS THE SLIDES //////////////////////

  ////////////////////////////// START FUNCTIONS TO HANDLE THE MODEL ///////////////////////
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  function handleFoodModel(index) {
    setFood([...food, index]);
    console.log("index >>>>>>>>>", index);
    console.log("index >>>>>>>>>", food[index]);
    setFoodModel(food[index]);
    setShow(true);
    console.log("loginContext >>>>>>>>>>>>>>  ", loginContext);
  }
  function handleRestuarantModel(index) {
    setRestuarant([...restuarant, index]);
    console.log("index >>>>>>>>>", index);
    console.log("index >>>>>>>>>", restuarant[index]);
    setRestuarantModel(restuarant[index]);
    setShow(true);
    console.log("loginContext >>>>>>>>>>>>>>  ", loginContext);
  }
  ////////////////////////////////////// END OF THE FUNCTIONS TO HANDLE THE MODEL /////////////////////////

  ////////////////////////////////////// START OF ADD FOOD FUNCTION ////////////////////////
  async function addFood(item) {
    console.log(food);
    // item.id = uuid();
    item.complete = false;

    console.log(loginContext.token);
    console.log("restuarantName >>>>>>>>> ", item.restuarantName);
    // eslint-disable-next-line eqeqeq
    console.log(
      "restuarant.name >>>>>>>>>>>> ",
      restuarant.filter((items) => {
        return item.restuarantName == items.name;
      })
    );

    // eslint-disable-next-line eqeqeq
    let restName = restuarant.filter((items) => {
      return item.restuarantName == items.name;
    });
    console.log(restName[0].id);

    let obj = {
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.price,
      restuarantId: restName[0].id,
    };
    try {
      console.log(obj);
      const res = await superagent
        .post(`http://localhost:3001/v4/food`)
        .send(obj)
        .set("Authorization", "Bearer " + loginContext.token);
      console.log(res);
      console.log(food);
    } catch (error) {
      alert("Invalid data");
    }
    setFood([...food, item]);
  }
  //////////////////////////////////////// END OF ADD TO FOOD FUNCTION //////////////////////////////////

  /////////////////////////////////////// START OF ADD RESTUARANT FUNCTION //////////////////////////////

  async function addRestuarant(item) {
    console.log(restuarant);
    // item.id = uuid();
    item.complete = false;

    console.log(loginContext.token);

    let obj = {
      name: item.name,
      image: item.image,
      foodType: item.foodType,
      location: item.location,
      description: item.description,
      userId: loginContext.user.userId,
    };
    try {
      console.log(obj);
      const res = await superagent
        .post(`http://localhost:3001/v4/restuarant`)
        .send(obj)
        .set("Authorization", "Bearer " + loginContext.token);
      console.log(res);
      console.log(restuarant);
    } catch (error) {
      alert("Invalid data");
    }
    setRestuarant([...restuarant, item]);
  }

  ////////////////////////////// END OF ADD RESTUARANT FUNCTION //////////////////////////
  const handleAddToFav = async () => {
    let obj = {
      foodId: foodModel.id,
      userId: loginContext.user.userId,
    };
    try {
      console.log(obj);
      const res = await superagent
        .post(`http://localhost:3001/v1/fav`)
        .send(obj)
        .set("Authorization", "Bearer " + loginContext.token);
      console.log(res);
      console.log(restuarant);
    } catch (error) {
      alert("Invalid data");
    }
    setFav([...fav]);
  };
  /////////////////////////////// ADD TO CART Function /////////////////////

  const handleAddToCart = async () => {
    try {
      // get CART >> if exists get http://localhost:3001/v2/cart/userId/1
      let userCartItems = [],
        foodCart = [];
      let cartId = -1;
      const userCart = await superagent
        .get(`http://localhost:3001/v2/cart/userId/${loginContext.user.userId}`)
        .set("Authorization", "Bearer " + loginContext.token);

      console.log("userCart: ", userCart);

      // eslint-disable-next-line eqeqeq
      if (userCart.body && userCart.body.length != 0) {
        userCartItems = await superagent
          .get(`http://localhost:3001/v2/cart/items/${userCart.body.id}`)
          .set("Authorization", "Bearer " + loginContext.token);
        console.log("userCartItems: ", userCartItems.body);
        const itemInCart = userCartItems.body.filter((item) => {
          return item.foodId === foodModel.id;
        });
        console.log("itemInCart: ", itemInCart);
        cartId = userCartItems.body[0].cartId;
        userCartItems.body.map((food) => {
          if (food.foodId === foodModel.id) {
            console.log("food.foodId ", food.foodId);
            foodCart.push({
              foodId: food.foodId,
              qty: food.qty + 1,
              price: food.price,
            });
          } else {
            foodCart.push({
              foodId: food.foodId,
              qty: food.qty,
              price: food.price,
            });
          }
        });
        if (itemInCart.length === 0) {
          foodCart.push({
            foodId: foodModel.id,
            qty: 1,
            price: foodModel.price,
          });
        }
        setFoodArray(foodCart);
      } else {
        foodCart.push({ foodId: foodModel.id, qty: 1, price: foodModel.price });
        setFoodArray(...foodCart);
        console.log("First Item ....", foodCart);
      }

      let obj = {
        food: foodCart,
        userId: loginContext.user.userId,
      };
      // eslint-disable-next-line eqeqeq
      if (cartId != -1) {
        console.log("Put ", cartId);
        await superagent
          .put(`http://localhost:3001/v2/cart/${cartId}`)
          .send(obj)
          .set("Authorization", "Bearer " + loginContext.token);
      } else {
        console.log("post ");
        const res = await superagent
          .post(`http://localhost:3001/v2/cart`)
          .send(obj)
          .set("Authorization", "Bearer " + loginContext.token);
        console.log("res.body ", res.body);
      }
      // setCart([...cart, foodModel.id]);
      console.log("obj ", obj);
      console.log("COMPLETE");
    } catch (error) {
      alert("Invalid data " + error);
    }
  };
  //////////////////////////////////////// END OF CART FUNCTION ////////////////////////////////////////

  ////////////////////////////////////// START OF DELETE FOOD FUNCTION ////////////////////////////////////
  async function deleteFood(id) {
    console.log(id);
    try {
      await superagent
        .delete(`http://localhost:3001/v4/food/${id}`)
        .set("Authorization", "Bearer " + loginContext.token);

      const getFood = await superagent
        .get(`http://localhost:3001/v4/food/`)
        .set("Authorization", "Bearer " + loginContext.token);
      const items = food.filter((item) => item.id !== id);
      setFood(getFood.body);
      setShow(false);
      console.log("id>>>>>>>", id);
      console.log("items.id >>>>>>", items.id);
      console.log("items>>>>", items);
      console.log("foods>>>>>", getFood.body);
    } catch (error) {
      alert("Invalid delete");
    }
  }
  //////////////////////////////////////// END OF DELETE FOOD FUNCTION //////////////////////////////////

  ///////////////////////////////////// START OF DELETE RESTUARANT FUNCTION ////////////////////////////////
  async function deleteRestuarant(id) {
    console.log(id);
    try {
      await superagent
        .delete(`http://localhost:3001/v4/restuarant/${id}`)
        .set("Authorization", "Bearer " + loginContext.token);

      const getRestuarant = await superagent
        .get(`http://localhost:3001/v4/restuarant/`)
        .set("Authorization", "Bearer " + loginContext.token);
      const items = restuarant.filter((item) => item.id !== id);
      setFood(getRestuarant.body);
      setShow(false);
      console.log("RESTUARANT id>>>>>>>", id);
      console.log("RESTUARANT items.id >>>>>>", items.id);
      console.log("RESTUARANTs items>>>>", items);
      console.log("RESTUARANTs>>>>>", getRestuarant.body);
    } catch (error) {
      alert("Invalid delete");
    }
  }
  ////////////////////////////////////// END OF DELETE RESTUARANT FUNCTION /////////////////////

  //////////////////////////////////////// START OF useEFFECT FUNCTIONS /////////////////////////

  useEffect(() => {
    axios
      .get(`http://localhost:3001/v4/food`)
      .then((res) => {
        console.log(res);
        setFood(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/v4/restuarant`)
      .then((res) => {
        console.log(res);
        setRestuarant(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(loginContext);

  ///////////////////////////////// END OF useEFFECT FUNDTIONS /////////////////////////////////////////

  return (
    <div>
      <div class="image10" />
      <div class="title22">
        <h1>
          restaurants&
          <br />
          food
        </h1>
      </div>
      <FoodStyle>
        {restuarant.map((restuarant, idx) => {
          return (
            <>
              <div class="container bootstrap snippets bootdey">
                <div class="row">
                  <div class="resInfo">
                    <div class="col-sm-10" key={restuarant.name}>
                      {restuarant.name}
                    </div>
                    <div class="col-sm-10">{restuarant.location}</div>
                    <div class="col-sm-10">{restuarant.description}</div>
                  </div>
                  <div class="resImg" s>
                    <a href="/users" class="pull-right">
                      <img
                        style={{ width: "250px", height: "250px" }}
                        key={restuarant.image}
                        src={restuarant.image}
                        title="profile image"
                        class="img-circle img-responsive"
                      />
                    </a>
                  </div>
                  <Auth capability="delete">
                    <Button
                      class="btn"
                      key={restuarant.id}
                      onClick={() => deleteRestuarant(restuarant.id)}
                    >
                      Delete Restuarant
                    </Button>
                  </Auth>
                </div>

                {/* <h2 key={restuarant.name}>{restuarant.name}</h2>
              <img alt="img" key={restuarant.image} src={restuarant.image} />
              <Auth capability="delete">
                <Button
                  key={restuarant.id}
                  onClick={() => deleteRestuarant(restuarant.id)}
                >
                  Delete Restuarant
                </Button>
              </Auth> */}
                {/* <h3 key={restuarant.description}>{restuarant.description}</h3>
              <h3 key={restuarant.location}>{restuarant.location}</h3>
              <h3 key={restuarant.foodType}>{restuarant.foodType}</h3> */}

                {/* <Slider {...settings} style={{ margin: "50px" }}> */}
                  {food.map((food, index) => {
                    return (
                      <When condition={restuarant.id === food.restuarantId}>
                        <Card
                          className="https://i.pinimg.com/originals/67/5c/cf/675ccfecb0faf4f0c1673ebb9481de7e.gif"
                          key={index}
                          sx={{ maxWidth: 225 }}
                        >
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            onClick={() => handleFoodModel(index)}
                            image={food.image}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {food.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {food.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {food.price}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant="secondary"
                              onClick={() =>
                                handleAddToCart(foodModel.id)
                              }
                            >
                              Add to cart
                            </Button>{" "}
                          </CardActions>
                        </Card>
                      </When>
                    );
                  })}
                {/* </Slider> */}
              </div>
            </>
          );
        })}
      </FoodStyle>
      <FoodModel
        food={food}
        handleAddToCart={handleAddToCart}
        deleteFood={deleteFood}
        foodModel={foodModel}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        handleFoodModel={handleFoodModel}
        handleAddToFav={handleAddToFav}
      />
      {/* <RestuarantModel
        restuarant={restuarant}  deleteRestuarant={deleteRestuarant} restuarantModel={restuarantModel} show={show} handleShow={handleShow} handleClose={handleClose} handleRestuarantModel={handleRestuarantModel}

      /> */}
      <Auth capability="delete">
        <AddRestuarantsForm
          handleChange={handleChange2}
          handleSubmit={handleSubmit2}
        />
        <br />
        <AddFoodForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </Auth>
    </div>
  );
}

export default Restaurants;
