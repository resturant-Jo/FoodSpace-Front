import React from 'react';
import ReactDOM from 'react-dom';
import LoginProvider from './context/loginContext';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import ProgressMobileStepper from "./components/cart/index"
// import Copyright from './components/cart/checkout';
class Main extends React.Component {
  render() {
    return(

<LoginProvider>

      <App />
      {/* <ProgressMobileStepper/>
      <Copyright/> */}
      
</LoginProvider>

      ) 
  }
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();