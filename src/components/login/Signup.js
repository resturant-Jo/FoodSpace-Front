import { useContext, useState } from "react";
import { LoginContext } from "../../context/loginContext";
import './signup.css'
// import { useHistory } from "react-router-dom";
export default function Login() {

  // let history = useHistory();
  const context = useContext(LoginContext);
  // For the login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //For The signup
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState();
  const [adress, setAdress] = useState('');
  const [profilePicture, setProfilePicture] = useState();
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState();
  const [role, setRole] = useState('');
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    context.signup(username, firstname, lastname, email, gender, age, adress, profilePicture, phone, password, role )
    // history.push("/");
  };
  return (
    <>
    <div className="signupbody">
        <div class="container1">
<form   id="signup">
    <div class="header">
        <h3 style={{color:"#e63946",fontSize:"50px"}}>Sign Up</h3>
        <p style={{color:"#e63946",fontSize:"30px"}}>Create an account</p>
    </div>
    <div class="sep"></div>
    <div class="inputs">
        <input onChange={(e) => setUsername(e.target.value)} placeholder="UserName" type="text" name="firstname" required /><br/>
        <input onChange={(e) => setFirstname(e.target.value)} placeholder="firstName" type="text" name="firstname" required /><br/>
        <input onChange={(e) => setLastname(e.target.value)} placeholder="lastname" type="text" name="lastname" required />
        <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="e-mail" autofocus  required/>
        <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" required />
        <input onChange={(e) => setAdress(e.target.value)} placeholder="address" type="text" name="adress" required />
        <input onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="number" name="phone" required/>
        {/* <input onChange={(e) => setGender(e.target.value)} placeholder="gender" type="text" name="gender" required/>
        <input onChange={(e) => setProfilePicture(e.target.value)} placeholder="profilePicture" type="text" name="profilePicture" required/>
        <input onChange={(e) => setAge(e.target.value)} placeholder="age" type="number" name="age" required/> */}
        {/* <input onChange={(e) => setRole(e.target.value)} placeholder="role = [admin,user,manager,driver]" type="text" name="username" /> */}
        <select  type="text" placeholder="Role" name="role" className="select-signin"  onChange={(e) => setRole(e.target.value)}required >
                      <option placeholder="Role" value="user" name="role" >
                        User
                      </option>
                      <option value="driver" placeholder="Role" name="role" >
                        Driver
                      </option>
                    </select>
           <button onClick={handleSignupSubmit} type="submit"  style={{color:"white",backgroundColor:"#e63946"}}  class="btnSignup">Signup</button>
    </div>
</form>
</div>
</div>
    </>
  );
}