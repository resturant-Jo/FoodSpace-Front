import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Table } from "react-bootstrap";
function TheContact() {
  const [adminList, setAdminList] = useState({});
  const token = cookie.load("token");
  const Api = 'https://spacefood.herokuapp.com'

  useEffect(() => {

    // get admin
    axios
      .get(`${Api}/adminData`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAdminList(res.data);
        console.log("contactUs=====>", res.data);
      });

  }, [token]);





  return (
    <div>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {adminList.support  && adminList.support.map(item => { */}
          {/* return( */}
          <>
            <tr>
              <td>dena</td>
              <td>help</td>
              <td>order food</td>
              <td>dena@gmail.com</td>
            </tr>
          </>
          {/* );
            })} */}
        </tbody>
      </Table>


    </div>

  )
}

export default TheContact