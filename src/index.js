import React from 'react';
import ReactDOM from 'react-dom';
import LoginProvider from './context/loginContext';
import App from './App';
// import ProgressMobileStepper from "./components/cart/index"
class Main extends React.Component {
  render() {
    return(

<LoginProvider>

      <App />
      {/* <ProgressMobileStepper/> */}
</LoginProvider>

      ) 
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);