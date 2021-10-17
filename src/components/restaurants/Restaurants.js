/* eslint-disable array-callback-return */
import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import superagent from 'superagent';
import { Card,Button } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { When } from 'react-if';
import AddFoodForm from '../Forms/AddFoodForm';
import AddRestuarantsForm from '../Forms/AddRestaurantsForm'
import useForm from '../../hooks/form';
import useForm2 from '../../hooks/form2';
import { LoginContext } from '../../context/loginContext';

function Restaurants() {

  const loginContext=useContext(LoginContext)

    const [food, setFood] = useState([]);
    const [restuarant, setRestuarant] = useState([]);
    const [cart, setCart] = useState([]);
    const [userId, setUserId] = useState(1);
    const { handleChange, handleSubmit } = useForm(addFood,addRestuarant);
    const { handleChange2, handleSubmit2 } = useForm2(addRestuarant);



    let settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 2000,
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
            image:item.image,
             description:item.description,
             price:item.price,
             restuarantId:item.restuarantId,
          }
        try {
          console.log(obj);
          const res = await superagent.post(`https://spacefood.herokuapp.com/v4/food`)
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
            foodType:item.foodType,
            location:item.location,
            description:item.description,
            userId:item.userId,
          }
        try {
          console.log(obj);
          const res = await superagent.post(`https://spacefood.herokuapp.com/v4/restuarant`)
          .send(obj)
          .set('Authorization', 'Bearer ' + loginContext.token)
          console.log(res);
          console.log(restuarant);
      } catch (error) {
          alert('Invalid data');
      }
    setRestuarant([...restuarant, item]);
      }

      const handleAddToCart=async(index) =>{
        let obj={

        }
        await axios.post(`https://spacefood.herokuapp.com/v2/cart`)
        .then(res=>{
          console.log(res);
          setCart(res.data)

        })

      }
    
    useEffect(()=>{
        axios.get(`https://spacefood.herokuapp.com/v4/food`)
        .then(res=>{
            console.log(res);
            setFood(res.data)
          
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    useEffect(()=>{
        axios.get(`https://spacefood.herokuapp.com/v4/restuarant`)
        .then(res=>{
            console.log(res);
            setRestuarant(res.data)
          
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    console.log(food);
    console.log(restuarant);
    return (
        <div>
          <AddFoodForm handleChange={handleChange}
        handleSubmit={handleSubmit} />
        <br/>
        <AddRestuarantsForm handleChange={handleChange2}
        handleSubmit={handleSubmit2} />
            <h2> this is resturant page </h2>
            {restuarant.map(restuarant=>{
              return(
                <><h2 key={restuarant.id}>{restuarant.name}</h2>
                
                <Slider {...settings} style={{ margin: "30px" }}>
                  {food.map((food, index) => {
                    
                    return (
                      <When condition={restuarant.id===food.restuarantId}>
                      <Card
                        key={index}
                        style={{ width: "18rem" }}
                        className="slider-card"
                        >
                        <Card.Img
                          variant="top"
                          className="card-image"
                          src={food.image} />
                        <div className="details">
                          <h2>{food.name}</h2>
                        </div>
                        <Button onClick={handleAddToCart}>Add To Cart</Button>
                      </Card>
                          </When>
                    );
                  })}
                  
                </Slider>
                </>
              )
            })}
        </div>
    )
}

export default Restaurants
