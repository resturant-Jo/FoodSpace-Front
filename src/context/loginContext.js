import React from 'react';
import { useState, useEffect } from 'react';
import base64 from 'base-64';
import superagent from "superagent";
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
// import { useHistory } from "react-router-dom";


export const LoginContext = React.createContext();
const API = 'https://spacefood.herokuapp.com'
export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);
    const [token, setToken] = useState(null);

    // let history = useHistory();
    useEffect(() => {
        const cookieToken = cookie.load('token');
        JWToken(cookieToken);
        setToken(cookieToken)
        console.log(cookieToken);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const login = async (username, password) => {
        try {
            const encodedUser = base64.encode(`${username}:${password}`);
            const response = await superagent.post(`${API}/signin`)
                .set('authorization', `Basic ${encodedUser}`);
            console.log("response.body: ", response.body);
            return JWToken(response.body.token);


            // history.push("/")

        } catch (error) {
            alert('Invalid username or password');
            return false
        }
    }
    const signup = async (userName, firstname, lastname, email, gender, age, adress, profilePicture, phone, passWord, role) => {
        try {
            let obj = {
                username: userName,
                firstname: firstname,
                lastname: lastname,
                email: email,
                gender: gender,
                age: age,
                adress: adress,
                profilePicture: profilePicture,
                phone: phone,
                password: passWord,
                role: role
            }
            console.log(obj);
            const response = await superagent.post(`${API}/signup`, obj);
            console.log(response.body);
            JWToken(response.body.token);
        } catch (error) {
            alert(error.message)
        }
    };
    const JWToken = (token) => {
        if (token) {
            console.log('token: ', token)
            const user = jwt.decode(token);
            handleLogin(true, user);
            cookie.save('token', token)
            return true
        } else {
            handleLogin(false, {});
        }
    }
    const handleLogin = (loggedIn, user) => {
        setLoggedIn(loggedIn);
        setUser(user);
        cookie.save('user', user)
    }
    const logout = () => {
        handleLogin(false, {});
        // cookie.remove('token');
        cookie.remove('token', { path: '/' })
        cookie.remove('user', { path: '/' })
    }



    const can = (capability) => {
        //   console.log(user);
        return user?.capabilities?.includes(capability);
    };
    const state = {
        loggedIn,
        signup,
        login,
        logout,
        user,
        can,
        token,
        setIsUpdated,
        isUpdated
    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
};