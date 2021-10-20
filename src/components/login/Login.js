import { useContext, useState } from "react";
import { LoginContext } from "../../context/loginContext";
import "./login.css";
import { useHistory } from "react-router-dom";
export default function Login(props) {
  //login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  let history = useHistory();
 
  const context = useContext(LoginContext);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
   context.login(username, password).then((res)=>{

     if (res) history.push("/")
   });
  };
 
  return (
    <div class="one">
      <div class="image222"></div>

      {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
      <div class="bigCount">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card-group mb-0" style={{marginTop: "86px"}}>
                <div class="card p-4">
                  <div class="card-body">
                    <h1>Login</h1>
                    <p class="text-muted" style={{ fontSize: "25px" }}>
                      Sign In to your account
                    </p>
                    <form onSubmit={handleLoginSubmit}>
                      <div class="input-group mb-3">
                        <label>
                          <span class="input-group-addon">
                            <i class="fa fa-user"></i>
                          </span>
                          <input
                            class="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="username"
                            type="text"
                            name="username"
                            style={{
                              backgroundColor: "#F5F5F5",
                              width: "330px",
                              borderRadius: "3px",
                              fontSize: "0.8rem",
                            }}
                          ></input>
                        </label>
                      </div>
                      <div class="input-group mb-4">
                        <label>
                          <span class="input-group-addon">
                            <i class="fa fa-lock"></i>
                          </span>
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            class="form-control"
                            placeholder="Password"
                          ></input>
                        </label>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <button
                          // onClick={() => {
                          //   history.push("/");
                          // }}
                            style={{
                              color: "white",
                              backgroundColor: "#e63946",
                            }}
                            // onClick={()=>{history.push("./signin")}}
                            type="submit"
                            class="btn btn-primary px-4"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="card text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <div class="card-body text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p class="signupP">Don't have an account? </p>
                      <button
                        onClick={() => {
                          history.push("/signup");
                        }}
                        style={{ backgroundColor: "#e63946" }}
                        type="button"
                        class="btn btn-primary active mt-3"
                      >
                        Register Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
