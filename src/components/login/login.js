import { useContext, useState } from "react";
import { When } from "react-if";
import { Card, Elevation, H2, InputGroup, Button } from '@blueprintjs/core';
import { LoginContext } from "../../context/loginContext";


export default function Login(props) {

    //login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    const context = useContext(LoginContext);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        context.login(username, password)
    };

    

    return (
        <>
        
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

                    </form>
                </Card>
            </When>
    
        
        </>
    );
}