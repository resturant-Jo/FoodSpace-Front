import React, { useState, useEffect, useContext } from 'react'
import superagent from 'superagent';
import { LoginContext } from '../../context/loginContext';
import { Button, Card, Elevation } from "@blueprintjs/core";
import { When } from 'react-if';


function Orders() {
  const loginContext = useContext(LoginContext)
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(true)

  useEffect(() => {
    const userId = loginContext.user.userId
    console.log('userId >>>>>>>>>> ', userId);
    superagent.get(`http://localhost:3001/v2/cart`)
      .set('Authorization', 'Bearer ' + loginContext.token)
      .then(res => {
        setOrders(res.body)
        // console.log(id);
        console.log('RES BODY >>>>>>>>> ',res.body);
      })
      .catch(error => {
        console.log(error);
      })
    console.log(userId);
  }, [loginContext])
  console.log(orders);

  async function reciveOrder(id) {
    console.log(id);
    const obj = {
      cartId: id
    }
    try {
      await superagent.post(`http://localhost:3001/v3/order`)
        .send(obj)
        .set('Authorization', 'Bearer ' + loginContext.token)
        // .then(res => {
        //   setOrders(res.body)
        //   console.log(res.body);

        // })
      setShow(false)

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      {orders.map(ele => {
        return (

          <>
            <When condition={ele.status}>
              <Card interactive={true} elevation={Elevation.TWO}>
                <h5><a href="#">{ele.username}</a></h5>
                <h3 style={{ color: "black" }}>{` Total Price ${ele.totalPrice} JD`}</h3>
                <img alt='' src={ele.profilePicture} />
                <p>{ele.userId}</p>
                <Button onClick={() => reciveOrder(ele.id)}>Submit</Button>
              </Card>
            </When>
          </>

        )
      })}
    </div>
  )

}

export default Orders

