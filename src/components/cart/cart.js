/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import superagent from 'superagent';
import { LoginContext } from '../../context/loginContext';
import "./cart.css";
function Cart() {
  let history = useHistory();
  const loginContext = useContext(LoginContext)
  // const userId = loginContext.user.userId
  const [cart, setCart] = useState([]);
  const [cartData, setCartData] = useState([]);
  const API = 'https://spacefood.herokuapp.com'



  useEffect(() => {
    const userId = loginContext.user.userId
    console.log('userId >>>>>>>>>> ', userId);
    superagent.get(`${API}/v2/cart/${userId}`)
      .set('Authorization', 'Bearer ' + loginContext.token)
      .then(res => {
        // const filteredData=(res.body).filter(item=>{return item.userId === userId})
        setCart(...res.body)
        console.log("RES.BODY >>>>>>>>>>> ", res.body);
        // console.log(filteredData);
        console.log("CARTDATA >>>>>>>>>>>>> ", res.body[0].cartData);
        setCartData(res.body[0].cartData)
      })
      .catch(error => {
        console.log(error);
      })
    console.log(userId);
  }, [loginContext])


  async function deleteFoodFromCart(id) {
    console.log(id);
    try {
      await superagent.delete(`${API}/v2/cart/items/${id}`)
        .set('Authorization', 'Bearer ' + loginContext.token);
    } catch (error) {
      alert(error);
    }
  }


  console.log(cart);
  console.log(cartData);
  console.log(loginContext);


  return (
    <div class="carCont">
      <div class="image4">
      </div>
      <div class="container px-3 my-5 clearfix">
        <div class="card">
          <div class="card-header">
            <h2 class="shopping">Shopping Cart</h2>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered m-0">
                <thead>
                  <tr>
                    <th class="text-center py-3 px-4" style={{ minWidth: "400px" }}>Product Name &amp; Details</th>
                    <th class="text-right py-3 px-4" style={{ width: "100px" }}>Price</th>
                    <th class="text-center py-3 px-4" style={{ width: "120px" }}>Quantity</th>
                    {/* <th class="text-right py-3 px-4" style={{width: "100px"}}>Total</th> */}
                    <th class="text-center align-middle py-3 px-0" style={{ width: "40px" }}><a href="#" class="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i class="ino ion-md-trash"></i></a></th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => {
                    return (


                      <tr key={index}>

                        <td class="p-4">
                          <div class="media align-items-center">
                            <img src={item.image} class="d-block ui-w-40 ui-bordered mr-4" alt="" />
                            <div key={index} class="media-body">
                              <a href="#" class="d-block text-dark">{item.name}</a>
                              <small>
                                <span class="text-muted">{item.description}</span>
                                {/* <span class="ui-product-color ui-product-color-sm align-text-bottom" style={{ Background: "#e81e2c" }}></span> &nbsp;
                                    <span class="text-muted">Size: </span> EU 37 &nbsp;
                                    <span class="text-muted">Ships from: </span> China */}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td class="text-right font-weight-semibold align-middle p-4">{item.price}</td>
                        <td class="text-right font-weight-semibold align-middle p-4">{item.qty}</td>
                        {/* <td class="align-middle p-4"><input type="text" class="form-control text-center" value="2"/></td> */}
                        {/* <td class="text-right font-weight-semibold align-middle p-4">$115.1</td> */}
                        <td onClick={() => deleteFoodFromCart(item.foodId)} class="text-center align-middle px-0"><a href="#" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div class="mt-4">
                {/* <label class="text-muted font-weight-normal">Promocode</label>
                <input type="text" placeholder="ABC" class="form-control" /> */}
              </div>
              <div class="d-flex">
                {/* <div class="text-right mt-4 mr-5">
                  <label class="text-muted font-weight-normal m-0"></label>
                  <div class="text-large"><strong>$20</strong></div>
                </div> */}
                <div class="text-right mt-4">
                  <label class="text-muted font-weight-normal m-0">{`Total price ${cart ? cart.totalPrice : 0}`}</label>
                  <div class="text-large"><strong></strong></div>
                </div>
              </div>
            </div>
            <div class="float-right">
              <button onClick={() => { history.push("/restaurants") }} style={{ color: "white", backgroundColor: "#E63946" }} type="button" class="btn btn-lg btn-default md-btn-flat mt-2 mr-3">Back to shopping</button>
              <button onClick={() => { history.push("/checkout") }} type="button" style={{ color: "white", backgroundColor: "#582" }} class="btn btn-lg btn-primary mt-2">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;