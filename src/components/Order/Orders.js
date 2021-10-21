import React, { useState, useEffect, useContext } from 'react'
import superagent from 'superagent';
import { LoginContext } from '../../context/loginContext';
// import { Button, Card, Elevation } from "@blueprintjs/core";
import { Button, Card } from 'react-bootstrap';
import { When } from 'react-if';


function Orders() {
  const loginContext = useContext(LoginContext)
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(true)

  const API = 'https://spacefood.herokuapp.com'

  useEffect(() => {
    const userId = loginContext.user.userId
    console.log('userId >>>>>>>>>> ', userId);
    superagent.get(`${API}/v2/cart`)
      .set('Authorization', 'Bearer ' + loginContext.token)
      .then(res => {
        setOrders(res.body)
        // console.log(id);
        console.log('RES BODY >>>>>>>>> ', res.body);
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
      await superagent.post(`${API}/v3/order`)
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
              {/* <Card interactive={true} elevation={Elevation.TWO} style={{ display:"inline-block" }}>
                <br/>
                <h4>{ele.username}</h4>
                <h5 style={{ color: "black" }}>{` Total Price ${ele.totalPrice} JD`}</h5>
                <img alt='' src={ele.profilePicture} />
                <p>{ele.userId}</p>
                <Button onClick={() => reciveOrder(ele.id)}>Recive Order</Button> */}
              {/* 
              <Card style={{ width: '23rem' }} interactive={true} elevation={Elevation.TWO}>
                <img alt='' src={ele.profilePicture} />
                <h5><a href="#">{ele.username}</a></h5>
                <h3 style={{ color: "black" }}>{` Total Price ${ele.totalPrice} JD`}</h3>
                <p>{ele.userId}</p>
                <Button  onClick={() => reciveOrder(ele.id)}>Submit</Button>
              </Card> */}
              <Card style={{ width: '23rem' }} interactive={true} >
                <Card.Img alt='' src={ele.profilePicture} />
                <Card.Body>
                  <Card.Title>New order</Card.Title>
                  <Card.Text>
                    <h5><a href="#">{ele.username}</a></h5>
                    <h3 style={{ color: "black" }}>{` Total Price ${ele.totalPrice} JD`}</h3>
                    <p>{ele.userId}</p>
                  </Card.Text>
                  <Button variant="primary" onClick={() => reciveOrder(ele.id)}>Take order</Button>
                </Card.Body>
              </Card>
            </When>
          </>

        )
      })}
    </div>
  )

}

export default Orders

