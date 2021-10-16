
// import React, { useContext } from 'react';
// import ToDo from './components/todo/todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from './components/login/login';
import Auth from './components/login/auth';
import LoginProvider from './context/loginContext';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';



// import SettingsContext from './context/context';
function App() {
  return (
    <>
    <h1></h1>
<BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutus">
              <AboutUs/>
            </Route>
            <Route path="/sign">
              <Login />
            </Route>
     

            

          </Switch>


       <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;