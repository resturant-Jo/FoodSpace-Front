import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../../../context/loginContext';
import superagent from 'superagent';
// import { Card } from 'react-bootstrap';
import { Button, Card, Elevation } from "@blueprintjs/core";
const API = 'https://spacefood.herokuapp.com'

function RecievedOrders() {
  const loginContext = useContext(LoginContext)
  const [recievedOrders, setRecivedOrders] = useState([]);

  useEffect(() => {
    const userId = loginContext.user.userId
    console.log('userId >>>>>>>>>> ', userId);
    superagent.get(`${API}/v3/order`)
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

  async function removeOrder(id, cartId) {
    console.log(id);
    const obj = {
      cartId: cartId
    }
    try {
      await superagent.delete(`${API}/v3/order/${id}`)
        .send(obj)
        .set('Authorization', 'Bearer ' + loginContext.token)
      // .then(res => {
      //   setOrders(res.body)
      //   console.log(res.body);

      // })
      // setShow(false)

    } catch (error) {
      alert(error);
    }
  }
  console.log(recievedOrders);


  return (
    <div>
      {recievedOrders.map((ele, index) => {
        console.log("ele >>>>>>>>>>>>>> ", ele);
        return (

          <>

            <Card interactive={true} elevation={Elevation.TWO} style={{ display: "inline-block" }}>
              <h3>{ele.username}</h3>
              <h5 style={{ color: "black" }}>{` User Email : ${ele.email} `}</h5>
              <h5 style={{ color: "black" }}>{` User Number Phone : ${ele.phone} `}</h5>
              <img alt='' src={ele.profilePicture} />
              <p>{ele.userId}</p>
              <Button onClick={() => removeOrder(ele.orderId, ele.cartId)}>Remove Order</Button>
            </Card>

          </>

        )
      })}
    </div>
  )
}

export default RecievedOrders
