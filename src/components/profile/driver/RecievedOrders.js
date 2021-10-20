import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../../../context/loginContext';
import superagent from 'superagent';
import { Card } from 'react-bootstrap';

function RecievedOrders() {
  const loginContext = useContext(LoginContext)
  const [recievedOrders, setRecivedOrders] = useState([]);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const userId = loginContext.user.userId
    console.log('userId >>>>>>>>>> ', userId);
    superagent.get(`http://localhost:3001/v3/order`)
      .set('Authorization', 'Bearer ' + loginContext.token)
      .then(res => {
        setRecivedOrders(res.body)
        console.log(res.body);
        console.log(res.body);
      })
      .catch(error => {
        console.log(error);
      })
    console.log(userId);
  }, [loginContext])


  return (
    <div>
      {recievedOrders.map((ele, index) => {
        return (

          <>

            <Card
              key={index}
              style={{ width: "18rem" }}
              className="slider-card"
            >
              <Card.Img
                variant="top"
                className="card-image"
                //   onClick={() => handleFoodModel(index)}
                src={ele.image} />
              <div className="details">
                <h2>Name : {ele.name}</h2>
                <h2>Price : {ele.price}</h2>
              </div>
            </Card>

          </>

        )
      })}
    </div>
  )
}

export default RecievedOrders
