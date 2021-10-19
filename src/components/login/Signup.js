import { useContext, useState } from "react";
import { Card, Elevation, H2, InputGroup, Button } from '@blueprintjs/core';
import { LoginContext } from "../../context/loginContext";
import { When } from "react-if";
import './signup.css'
export default function Login() {
  const context = useContext(LoginContext);
  // For the login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //For The signup
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [adress, setAdress] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [singupDisplay, setSingupDisplay] = useState(true);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    context.login(username, password)
  };
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    context.signup(username, password, firstname, lastname, email, gender, adress, phone,age,profilePicture, role)
  };
  return (
    <>
    <div className="signupbody">
        <div class="container1">
<form id="signup">
    <div class="header">
        <h3>Sign Up</h3>
        <p>Create an account</p>
    </div>
    <div class="sep"></div>
    <div class="inputs">
        <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="e-mail" autofocus />
        <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password" />
        <input onChange={(e) => setFirstname(e.target.value)} placeholder="firstName" type="text" name="firstname" /><br/>
        <input onChange={(e) => setLastname(e.target.value)} placeholder="lastname" type="text" name="lastname" />
        <input onChange={(e) => setAdress(e.target.value)} placeholder="address" type="text" name="adress" />
        <input onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="number" name="phone" />
        <input onChange={(e) => setRole(e.target.value)} placeholder="role = [admin,user,manager,driver]" type="text" name="username" />
           <button type="submit"  style={{color:"white",backgroundColor:"#e63946"}}  class="btnSignup">Signup</button>
    </div>
</form>
</div>
</div>
    </>
  );
}