// import  Alert from "@mui/icons-material";
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import superagent from 'superagent';
import { LoginContext } from '../../context/loginContext';
import './checkout.css'
function Checkout() {
    const greenAlert=()=>{
      alert("Succfuly Checked Out")
    }
    const loginContext = useContext(LoginContext)
    const [cart, setCart] = useState([]);
    const [cartData, setCartData] = useState([])
    useEffect(() => {
      const userId=loginContext.user.userId
      console.log('userId >>>>>>>>>> ',userId);
      superagent.get(`http://localhost:3001/v2/cart`)
        .set('Authorization', 'Bearer ' + loginContext.token)
        .then(res => {
          const filteredData=(res.body).filter(item=>{return item.userId === userId})
          setCart(...filteredData)
          // console.log(id);
          console.log(filteredData);
          // console.log(filteredData[0].cartData);
          setCartData(filteredData[0].cartData)
        })
        .catch(error => {
          console.log(error);
        })
  console.log(userId);
    }, [loginContext])
    console.log(cart);
    console.log(cartData);
    console.log(loginContext);
  return (
    <div class="purchase" >
        <br/>
        <br/>
        <img class="image5"></img>
      <section >
        <div class="row">
          <div class="col-lg-8 mb-4">
            <div class="card wish-list pb-1">
              <div class="card-body">
                <h5 class="mb-2">Billing details</h5>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="md-form md-outline mb-0 mb-lg-4">
                      <input
                        type="text"
                        id="firstName"
                        class="form-control mb-0 mb-lg-2" placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="md-form md-outline">
                      <input type="text" id="lastName" class="form-control"  placeholder="Last name"/>
                    </div>
                  </div>
                </div>
                <div class="md-form md-outline my-0">
                  <input
                    type="text"
                    id="companyName"
                    class="form-control mb-0"
                    placeholder="Company name (optional)"
                  />
                </div><br></br>
                <div class="d-flex flex-wrap">
                  <div class="select-outline position-relative w-100">
                  <input
                    type="text"
                    id="form14"
                    placeholder="House number and street name"
                    class="form-control"
                  />
                  </div>
                </div>
                {/* <div class="md-form md-outline mt-0">
                  <input
                    type="text"
                    id="form14"
                    placeholder="House number and street name"
                    class="form-control"
                  />
                </div> */}
                <div class="md-form md-outline">
                  <input
                    type="text"
                    id="form15"
                    placeholder="Address"
                    class="form-control"
                  />
                </div>
                <div class="md-form md-outline">
                  <input type="text" id="form16" class="form-control"  placeholder="Postcode / ZIP"/>
                </div>
                {/* <div class="md-form md-outline">
                  <input type="text" id="form17" class="form-control" />
                  <label for="form17">Town / City</label>
                </div> */}
                <div class="md-form md-outline">
                  <input type="number" id="form18" class="form-control" placeholder="Phone" />
                </div>
                <div class="md-form md-outline">
                  <input type="email" id="form19" class="form-control" placeholder="Email address" />
                </div>
                <div class="md-form md-outline">
                  {/* <textarea
                    id="form76"
                    class="md-textarea form-control"
                    rows="4"
                  ></textarea> */}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="mb-3">The total amount of</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Food Price
                    <span>{`${cart.totalPrice} JD`}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Receving Food Method
                    <span>By Driver</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Delivary Price
                    <span>2 JD</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      {/* <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong> */}
                    </div>
                    <span>
                      <strong>{`${cart.totalPrice + 2} JD`}</strong>
                    </span>
                  </li>
                </ul>
                <button
                onClick={greenAlert}
                  type="button"
                  class="btn btn-primary btn-block waves-effect waves-light"
                >
                  Make purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Checkout;