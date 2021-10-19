import { useEffect, useState, useContext } from "react";
import axios from "axios";
import cookie from "react-cookies";

// import "./wrokerStyle/personalWorker.css";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { ProfileContext } from "../user/user";

function PersonalInfo() {
  const role = cookie.load("user");
  const [userList, setUserList] = useState({});
  const [workerList, setWorkerList] = useState({});
  const [edite, setEdite] = useState(true);
  const [values, setValues] = useState({});
  const token = cookie.load("token");
  const Api = "http://localhost:3001";

  const [show, setShow] = useState(false);
  const context =useContext(ProfileContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    // get information personal
    await axios
      .get(`${Api}/profile`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserList(res.data);
        console.log(res.data);
      });

  }, []);

  function handleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    console.log("from sign driver :", values);
  }

  const openForm = () => {
    setEdite(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const reqBody = {
        username: values.username || context.user.username,
        firstname: values.firstname || context.user.firstname,
        lastname: values.lastname || context.user.lastname,
        email: values.email || context.user.email,
        gender: values.gender || context.user.gender,
        age: values.age || context.user.age,
        adress: values.adress || context.user.adress,
        profilePicture: values.profilePicture || context.user.profilePicture,
        password: values.password ,
        role: values.role || context.user.role,
        phone: values.phone || context.user.phone,
    };
    await axios
      .put(`${Api}/updateaccount`, reqBody, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWorkerList(res.data);
      });
    setEdite(true);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Profile has been Updated",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  // ============================== change Img =================================
  const [imges, setImg] = useState({});

  const handleImg = async (e) => {
    setImg(e.target.files);
  };
  console.log("imges;;;;;;;;;;;;;;;;;;;", typeof imges);

  const handleSubmitImg = async (e) => {
    e.preventDefault();

    const body = new FormData();
    for (const file of Object.entries(imges)) {
      file.forEach((el) => {
        if (typeof el === "object") {
          body.append("userImg", el);
        }
      });
    }
    console.log("----------------", body);

    let filePic = await axios({
      method: "post",
      url: `${Api}/profilepicture`,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    });
    let pathImges = filePic.data;

    let reqBody = {
      profilePicture: pathImges,
    };
   
      let res = await axios.put(`${Api}/updateaccount`, reqBody, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setShow(false);
      setWorkerList(res.data);
      context.setUserData(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Image has been Changed",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log(res);
    
    e.target.reset();
  };

  //  ===================== delete account ================ 
   // :::::::::: delete account ::::::::::
   const handleDeleteAccount = async () => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(async(result) => {
        if (result.isConfirmed) {
            let res = await axios.delete(`${Api}/deleteaccount`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          
          cookie.remove('token', { path: '/' })
          cookie.remove('user', { path: '/' })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
   
};

  return (
    <>
      {/*  :::::: render personal information ::::: */}
      <section className="personal-section">
        <Container>
          <Row>
            <Col xs={1}>
              <div className="personal-info-img">
                {workerList.profilePicture &&
                workerList.profilePicture.includes("upload") ? (
                  <img
                    src={`${Api}/${workerList.profilePicture}`}
                    alt={workerList.id}
                  />
                ) : (
                  <img src={workerList.profilePicture} alt={workerList.id} />
                )}
              </div>
            </Col>
            <Col >
              <button
                variant="primary"
                className="personal-change-imgbtn"
                onClick={handleShow}
              >
                Change
              </button>
              {/* ================ modal ============== */}
              <div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Change Profile Picture</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <form onSubmit={handleSubmitImg}>
                        <label for="file">Select your image:</label>
                        <Form.Control
                          type="file"
                          multiple
                          accept="image/*"
                          name="uploadedImages"
                          onChange={handleImg}
                        />
                        <Button type="submit">upload</Button>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="personal-info-top">
          <form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  onChange={handleChange}
                  defaultValue={userList.username}
                  disabled={edite}
                />
              </Col>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  defaultValue={userList.firstName}
                  disabled={edite}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  defaultValue={userList.lastName}
                  disabled={edite}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  defaultValue={userList.password}
                  disabled={edite}
                />
              </Col>
              <Col>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  defaultValue={userList.phone}
                  disabled={edite}
                />
              </Col>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  defaultValue={userList.email}
                  disabled={edite}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  onChange={handleChange}
                  defaultValue={userList.location}
                  disabled={edite}
                />
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            {!edite && (
              <Row className="mb-3">
                <Col md={5}></Col>
                <Col md={5}>
                  <Button type="submit" variant="success">
                    {" "}
                    Save
                  </Button>
                </Col>
                <Col md={2}></Col>
              </Row>
            )}
          </form>
          {edite && (
            <Row className="mb-3">
              <Col md={5}></Col>
              <Col md={5}>
                <Button type="button" variant="warning" onClick={openForm}>
                  {" "}
                  Update
                </Button>
              </Col>
              <Col md={2}></Col>
            </Row>
          )}
        </div>

      </section>
      <Button variant="danger" onClick={handleDeleteAccount}>delete account</Button>
    </>
  );
}

export default PersonalInfo;