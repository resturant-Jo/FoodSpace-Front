import React, { useContext } from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext';

export default function Header() {
    const loginContext = useContext(LoginContext)
    return (
        <>
            
                <Navbar className="header" style={{ backgroundColor: "#c64756" }}>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading className="title"><h2>Food Space</h2></Navbar.Heading>
                        <Navbar.Divider />
                        <Link to='/'>
                            <Button className="bp4-minimal" icon="home" text="Home" />
                        </Link>
                        <Link to='/AboutUs'>
                            <Button className="bp4-minimal"  text="AboutUs" />
                        </Link>
                        <Link to='/restaurants'>
                            <Button className="bp4-minimal"  text="Restaurants" />
                        </Link>
                        <Link to='/profile'>
                            <Button className="bp4-minimal"  text="Profile" />
                        </Link>
                        <Link to='/sign'>
                            {/* <Button className='bp3-minimal' icon='settings' text='Settings' /> */}
                        <Button onClick={loginContext.logout} className='bp3-minimal' icon={loginContext.loggedin ? 'log-out' : 'log-in'}>
                            {loginContext.loggedin ? 'Logout' : 'Login'}
                        </Button>
                        </Link>
                    </Navbar.Group>
                </Navbar>
            
        </>
    );
}