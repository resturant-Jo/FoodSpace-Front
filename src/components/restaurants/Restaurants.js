/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import superagent from 'superagent';
import { Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { When } from 'react-if';
import AddFoodForm from '../Forms/AddFoodForm';
import AddRestuarantsForm from '../Forms/AddRestaurantsForm'
import useForm from '../../hooks/form';
import useForm2 from '../../hooks/form2';
import { LoginContext } from '../../context/loginContext';
import "./Restaurants.css"
import { FoodStyle } from './FoodStyle';
import FoodModel from './FoodModel/FoodModel';

function Restaurants() {

  const loginContext = useContext(LoginContext)

  const [food, setFood] = useState([]);
  const [foodArray, setFoodArray] = useState([]);
  const [foodModel, setFoodModel] = useState({});
  const [restuarant, setRestuarant] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const { handleChange, handleSubmit } = useForm(addFood, addRestuarant);
  const { handleChange2, handleSubmit2 } = useForm2(addRestuarant);

  function handleShow() {
    setShow(true)
  }
  function handleClose() {
    setShow(false)
  }

  function handleModel(index) {

    setFood([...food, index]);
    console.log("index >>>>>>>>>", index);
    console.log("index >>>>>>>>>", food[index]);
    setFoodModel(food[index])
    setShow(true)
    console.log("loginContext >>>>>>>>>>>>>>  ", loginContext);

  }

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
  async function addFood(item) {
    console.log(food);
    // item.id = uuid();
    item.complete = false;


    console.log(loginContext.token);

    let obj = {
      name: item.name,
      image: item.image,
      description: item.description,
      price: item.price,
      restuarantId: item.restuarantId,
    }
    try {
      console.log(obj);
      const res = await superagent.post(`http://localhost:3001/v4/food`)
        .send(obj)
        .set('Authorization', 'Bearer ' + loginContext.token)
      console.log(res);
      console.log(food);
    } catch (error) {
      alert('Invalid data');
    }
    setFood([...food, item]);
  }

  async function addRestuarant(item) {
    console.log(restuarant);
    // item.id = uuid();
    item.complete = false;


    console.log(loginContext.token);

    let obj = {
      name: item.name,
      foodType: item.foodType,
      location: item.location,
      description: item.description,
      userId: item.userId,
    }
    try {
      console.log(obj);
      const res = await superagent.post(`http://localhost:3001/v4/restuarant`)
        .send(obj)
        .set('Authorization', 'Bearer ' + loginContext.token)
      console.log(res);
      console.log(restuarant);
    } catch (error) {
      alert('Invalid data');
    }
    setRestuarant([...restuarant, item]);
  }

  /////////////////////////////// ADD TO CART Function /////////////////////

  const handleAddToCart = async () => {
    try {
      // get CART >> if exists get http://localhost:3001/v2/cart/userId/1
      let userCartItems = [], foodCart = [];
      let cartId = -1;
      const userCart = await superagent.get(`http://localhost:3001/v2/cart/userId/${loginContext.user.userId}`)
        .set('Authorization', 'Bearer ' + loginContext.token);

      console.log('userCart: ', userCart);
      

      if (userCart.body && userCart.body.length != 0) {
        userCartItems = await superagent.get(`http://localhost:3001/v2/cart/items/${userCart.body.id}`)
          .set('Authorization', 'Bearer ' + loginContext.token);
        console.log('userCartItems: ', userCartItems.body);
        const itemInCart = userCartItems.body.filter(item => { return item.foodId === foodModel.id });
        console.log("itemInCart: ", itemInCart);
        cartId= userCartItems.body[0].cartId;
        userCartItems.body.map(food => {
          if (food.foodId === foodModel.id) {
            console.log("food.foodId ", food.foodId);
            foodCart.push({
              foodId: food.foodId, qty: (food.qty + 1), price: food.price
            })
          } else {
            foodCart.push({
              foodId: food.foodId, qty: food.qty, price: food.price
            })
          }
        });
        if (itemInCart.length === 0) {
          foodCart.push({ foodId: foodModel.id, qty: 1, price: foodModel.price});
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
      }
      if(cartId != -1){
        console.log("Put ", cartId);
        const res = await superagent.put(`http://localhost:3001/v2/cart/${cartId}`)
        .send(obj)
        .set('Authorization', 'Bearer ' + loginContext.token)
      }else{
        console.log("post ");
        const res = await superagent.post(`http://localhost:3001/v2/cart`)
        .send(obj)
        .set('Authorization', 'Bearer ' + loginContext.token)
        console.log("res.body ", res.body);
      }
      // setCart([...cart, foodModel.id]);
      console.log("obj ", obj);
      console.log("COMPLETE");
    } catch (error) {
      alert('Invalid data ' + error);
    }
  }

  async function deleteFood(id) {
    console.log(id);
    try {
      const res = await superagent.delete(`http://localhost:3001/v4/food/${id}`)
        .set('Authorization', 'Bearer ' + loginContext.token);

        const getFood = await superagent.get(`http://localhost:3001/v4/food/`)
        .set('Authorization', 'Bearer ' + loginContext.token);  
      const items = food.filter(item => item.id !== id);
      setFood(getFood.body);
      setShow(false)
      console.log("id>>>>>>>", id);
      console.log("items.id >>>>>>", items.id);
      console.log("items>>>>", items);
      console.log("foods>>>>>", getFood.body);

    } catch (error) {
      alert('Invalid delete');
    }

  }

  useEffect(() => {
    axios.get(`http://localhost:3001/v4/food`)
      .then(res => {
        console.log(res);
        setFood(res.data)

      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:3001/v4/restuarant`)
      .then(res => {
        console.log(res);
        setRestuarant(res.data)

      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  return (
    <div>
      <AddFoodForm handleChange={handleChange}
        handleSubmit={handleSubmit} />
      <br />
      <AddRestuarantsForm handleChange={handleChange2}
        handleSubmit={handleSubmit2} />
      <FoodStyle>
        <h2> this is resturant page </h2>
        {restuarant.map(restuarant => {
          return (
            <><h2 key={restuarant.id}>{restuarant.name}</h2>

              <Slider {...settings} style={{ margin: "30px" }}>
                {food.map((food, index) => {

                  return (
                    <When condition={restuarant.id === food.restuarantId}>
                      <Card
                        key={index}
                        style={{ width: "18rem" }}
                        className="slider-card"
                      >
                        <Card.Img
                          variant="top"
                          className="card-image"
                          onClick={() => handleModel(index)}
                          src={food.image} />
                        <div className="details">
                          <h2>{food.name}</h2>
                        </div>
                      </Card>
                    </When>
                  );
                })}

              </Slider>
            </>
          )
        })}
      </FoodStyle>
      <FoodModel
        food={food} handleAddToCart={handleAddToCart} deleteFood={deleteFood} foodModel={foodModel} show={show} handleShow={handleShow} handleClose={handleClose} handleModel={handleModel}

      />
    </div>
  )
}

export default Restaurants
