import { useContext, useState } from "react";
import { When } from "react-if";
import { Card, Elevation, H2, InputGroup, Button, Label } from '@blueprintjs/core';
import { LoginContext } from "../../context/loginContext";
import './login.css';
import { useHistory } from "react-router-dom";
export default function Login(props) {
    //login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //signup
    const [userName, setUserName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [adress, setAdress] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [phone, setPhone] = useState('');
    const [passWord, setPassWord] = useState('');
    const [role, setRole] = useState('');
    let history = useHistory();
    const [singupDisplay, setSingupDisplay] = useState(true);
    const context = useContext(LoginContext);
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        context.login(username, password)
    };
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        context.signup(userName, firstname, lastname, email, gender,age,  adress,profilePicture, phone,passWord, role)
    };
    return (
        <>
              <div class="image222"></div>

       {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
       <div class="bigCount">
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card-group mb-0">
          <div class="card p-4">
            <div class="card-body">
              <h1>Login</h1>
              <p class="text-muted" style={{fontSize:"25px"}}>Sign In to your account</p>
              <form onSubmit={handleLoginSubmit}>
              <div class="input-group mb-3">
              <label>
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input class="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" name="username"></input>
                </label>
              </div>
              <div class="input-group mb-4">
              <label>
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" placeholder="Password"></input>
                </label>
              </div>
              <div class="row">
                <div class="col-6">
                  <button style={{color:"white",backgroundColor:"#e63946"}} type="submit" class="btn btn-primary px-4">Login</button>
                </div>
              </div>
              </form>
            </div>
          </div>
          <div class="card text-white bg-primary py-5 d-md-down-none" style={{width:"44%"}}>
            <div class="card-body text-center">
              <div>
                <h2>Sign up</h2>
                <p class="signupP">
                Don't have an account? </p>
                <button onClick={()=>{history.push("/signup")}} style={{backgroundColor:"#582"}} type="button" class="btn btn-primary active mt-3">Register Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div><br/>
        </>
    );
}