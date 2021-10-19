import { useContext, useState } from "react";
import { When } from "react-if";
import { Card, Elevation, H2, InputGroup, Button } from '@blueprintjs/core';
import { LoginContext } from "../../context/loginContext";
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
  const [singupDisplay, setSingupDisplay] = useState(true);
  const context = useContext(LoginContext);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    context.login(username, password)
  };
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    context.signup(userName, firstname, lastname, email, gender, age, adress, profilePicture, phone, passWord, role)
  };
  return (
    <>
      {singupDisplay ?
        <When condition={!context.loggedIn}>
          <Card className="cardLogin" interactive elevation={Elevation.FOUR}>
            <H2>Login</H2>
            <form onSubmit={handleLoginSubmit}>
              <label>
                <span>Username</span>
                <InputGroup onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" name="username" />
              </label>
              <label>
                <span>Password</span>
                <InputGroup onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" name="password" />
              </label>
              <label>
                <Button type="submit">Login</Button>
              </label>
              <label>
                <Button type="button" onClick={() => setSingupDisplay(false)}>Signup</Button>
              </label>
            </form>
          </Card>
        </When>
        :
        <Card className="cardLogin" interactive elevation={Elevation.FOUR}>
          <H2>Signup</H2>
          <form onSubmit={handleSignupSubmit}>
            <label>
              <span>Username</span>
              <InputGroup onChange={(e) => setUserName(e.target.value)} placeholder="username" type="text" name="username" />
            </label>
            <br />
            <label>
              <span>Firstname</span>
              <InputGroup onChange={(e) => setFirstname(e.target.value)} placeholder="firstName" type="text" name="firstname" />
            </label>
            <br />
            <label>
              <span>Lastname</span>
              <InputGroup onChange={(e) => setLastname(e.target.value)} placeholder="lastname" type="text" name="lastname" />
            </label>
            <br />
            <label>
              <span>Password</span>
              <InputGroup onChange={(e) => setPassWord(e.target.value)} placeholder="password" type="password" name="password" />
            </label>
            <br />
            <label>
              <span>Email</span>
              <InputGroup onChange={(e) => setEmail(e.target.value)} placeholder="email" type="text" name="email" />
            </label>
            <br />
            <label>
              <span>Gender</span>
              <InputGroup onChange={(e) => setGender(e.target.value)} placeholder="gender" type="text" name="gender" />
            </label>
            <br />
            <label>
              <span>Profile Picture</span>
              <InputGroup onChange={(e) => setProfilePicture(e.target.value)} placeholder="profilePicture" type="text" name="profilePicture" />
            </label>
            <br />
            <label>
              <span>Adress</span>
              <InputGroup onChange={(e) => setAdress(e.target.value)} placeholder="adress" type="text" name="adress" />
            </label>
            <br />
            <label>
              <span>Phone Number</span>
              <InputGroup onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="number" name="phone" />
            </label>
            <br />
            <label>
              <span>Age</span>
              <InputGroup onChange={(e) => setAge(e.target.value)} placeholder="age" type="number" name="age" />
            </label>
            <br />
            <label>
              <span>role</span>
              <br />
              {/* <InputGroup onChange={(e) => setRole(e.target.value)} placeholder="role = [admin,user,vendor]" type="text" name="username" /> */}
              <select type="text" placeholder="Role" name="role" className="select-signin" onChange={(e) => setRole(e.target.value)} required >
                <option placeholder="Role" value="user" name="role" >
                  User
                </option>
                <option value="driver" placeholder="Role" name="role" >
                  Driver
                </option>
              </select>
            </label>
            <br />
            <label>
              <Button type="submit">Signup</Button>
            </label>
            <label>
              <Button type="button" onClick={() => setSingupDisplay(true)}>Signin</Button>
            </label>
          </form>
        </Card>
      }
    </>
  );
}