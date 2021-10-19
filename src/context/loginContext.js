import React from 'react';
import { useState, useEffect } from 'react';
import base64 from 'base-64';
import superagent from "superagent";
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
export const LoginContext = React.createContext();
const API = 'http://localhost:3001';
export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);
    const [token, setToken] = useState(null);
    useEffect(() => {
        const cookieToken = cookie.load('token');
        JWToken(cookieToken);
        setToken(cookieToken)
        console.log(cookieToken);
    }, []);
    const login = async (username, password) => {
        try {
            const encodedUser = base64.encode(`${username}:${password}`);
            const response = await superagent.post(`${API}/signin`)
                .set('authorization', `Basic ${encodedUser}`);
            console.log("response.body: ", response.body);
            JWToken(response.body.token);
            cookie.save('user',response.body.user)
        } catch (error) {
            alert('Invalid username or password');
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
        } else {
            handleLogin(false, {});
        }
    }
    const handleLogin = (loggedIn, user) => {
        setLoggedIn(loggedIn);
        setUser(user);
    }
    const logout = () => {
        handleLogin(false, {});
        cookie.remove('token');
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