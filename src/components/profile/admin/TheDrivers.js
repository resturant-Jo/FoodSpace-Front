import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
function TheDrivers() {
  const [allUsers, setAllUsers] = useState([]);
  const token = cookie.load("token");
  const Api = 'https://spacefood.herokuapp.com'


  useEffect(async () => {
    // get users form admin
    await axios
      .get(`${Api}/users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        await setAllUsers(res.data);
      });
  }, [token]);

  // ::::::: handleDeleteUser::::::
  const handleDeleteUser = async (id) => {

    // /deleteuser/:id
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        let res = await axios.delete(`${Api}/v4/user/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(res.data);
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
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
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length > 0 &&
            allUsers.map((item, indx) => {
              return item.role === "driver" ? (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.role}</td>
                    <td>{item.email}</td>
                    <td>{item.location}</td>
                    <td>
                      {" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDeleteUser(item.id);
                        }}
                      >
                        delete driver{" "}
                      </Button>
                    </td>
                  </tr>
                </>
              ) : (
                ""
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default TheDrivers;