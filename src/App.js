

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from './components/login/Login';
import Auth from './components/login/auth';
import LoginProvider from './context/loginContext';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import Restaurants from './components/restaurants/Restaurants';
import { LoginContext } from './context/loginContext';
import { useContext } from 'react';

import Signup from './components/login/Signup';
import Cart from './components/cart/cart';
import Checkout from './components/cart/checkout';
import Orders from './components/Order/Orders';
import Card from "./components/card/Card"


import DriverPage from './components/profile/driver/DriverPage'
import ClientProfile from './components/profile/client/ClientProfile';
import cookie from 'react-cookies'
import AdminProfile from './components/profile/admin/AdminProfile';


function App() {
  const userData=cookie.load('user')
  const loginContext = useContext(LoginContext)
  return (
    <>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/restaurants">
              <Restaurants />
            </Route>
            <Route path="/aboutus">
              <AboutUs/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
{loginContext.token ?
            <Route path="/profile">
              {userData.role === 'driver' ? <DriverPage />:''}
              {userData.role === 'user' ? <ClientProfile/>:''}
              {userData.role === 'admin' ? <AdminProfile/>:''}
              {/* <DriverPage />
              <ClientProfile/>
            <AdminProfile/> */}
            </Route>
            :
            <Route path="/profile">
             <DriverPage />
              <ClientProfile/>
            <AdminProfile/>
            </Route>
          }

          
          </Switch>
        <Footer />
        </BrowserRouter>

    </>
  );
}

export default App;