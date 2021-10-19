/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../../../context/loginContext';
import superagent from 'superagent';
import { Button, Modal, Table, Form } from 'react-bootstrap';
import cookie from 'react-cookies';

function Users() {

    const loginContext = useContext(LoginContext)
    const [user, setUser] = useState([]);
    const [UpdateUser, setUpdateUser] = useState([]);
    const accessToken = loginContext.token;
    const [show, setShow] = useState(false);
    const userId = loginContext.user.userId;
    // console.log(loginContext.user.userId);
    // console.log(userId);
    console.log(loginContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [adress, setAdress] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // axios.interceptors.request.use(
    //     config => {
    //         config.headers.authorization = `Bearer ${accessToken}`;
    //         return config
    //     }
    // )
    // console.log(accessToken);

    useEffect(async () => {
        // get information personal
        try {
            const res = await superagent.get(`http://localhost:3001/profile`)
                .set('Authorization', `Bearer ${loginContext.token}`)
            // const itemProfile = res.body.filter(item => { return item.id === userId });
            console.log(res);
            setUser(res.body);
            // console.log(itemProfile);
        } catch (error) {
            console.log(error);
        }
    }, [loginContext])
    console.log(user);


    async function updateAccount(event) {
        event.preventDefault();
        let obj = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender,
            age: age,
            adress: adress,
            profilePicture: profilePicture,
            password: password,
            role: role,
            phone: phone,
        }
        try {
            console.log(obj);
            const res = await axios.put(`http://localhost:3001/updateaccount`)
                .set('Authorization', 'Bearer ' + loginContext.token)
                .send(obj)
                // .then(async (res) => {
                //     await setUser(res);
                // });
                // setUser(res.body)
            console.log(res);
            console.log(user);
        } catch (error) {
            alert('Invalid data');
        }
    }


    async function deleteAccount(id) {
        console.log(id);
        try {
            await superagent.delete(`http://localhost:3001/deleteAccount`)
                .set('Authorization', 'Bearer ' + loginContext.token)
                .then(async (res) => {
                    await setUser(res);
                });

        } catch (error) {
            alert('Invalid delete');
        }

    }


    // console.log(user.username);
    return (
        <>
            <h2>Profile page</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>User Name</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>{user.firstname}</td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>{user.lastname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{user.adress}</td>
                    </tr>
                    <tr>
                        <td>Profile Picture</td>
                        <td>{user.profilePicture}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{user.password}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>{user.role}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="primary" onClick={handleShow}>
                Edit Account
            </Button>
            <Button variant="primary" onClick={() => { deleteAccount() }}>
                Delete Account
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" name="username" defaultValue={user.username} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={(e) => setFirstname(e.target.value)} placeholder="firstName" type="text" name="firstname" defaultValue={user.firstname} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control onChange={(e) => setLastname(e.target.value)} placeholder="lastname" type="text" name="lastname" defaultValue={user.lastname} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} placeholder="email" type="text" name="email" defaultValue={user.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control onChange={(e) => setGender(e.target.value)} placeholder="gender" type="text" name="gender" defaultValue={user.gender} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>age</Form.Label>
                            <Form.Control onChange={(e) => setAge(e.target.value)} placeholder="age" type="text" name="age" defaultValue={user.age} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={(e) => setAdress(e.target.value)} placeholder="address" type="text" name="addres" defaultValue={user.adress} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control onChange={(e) => setProfilePicture(e.target.value)} placeholder="profile picture" type="text" name="profilepicture" defaultValue={user.profilePicture} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} placeholder="password" type="text" name="password" defaultValue={user.password} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Role</Form.Label>
                            <Form.Control onChange={(e) => setRole(e.target.value)} placeholder="role" type="text" name="role" defaultValue={user.role} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="text" name="phone" defaultValue={user.phone} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(event) => { updateAccount(event) }}>
                            Edit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateAccount} onClick>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default Users
