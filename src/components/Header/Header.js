import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { Component } from "react";
import cookie from "react-cookies";
import { LoginContext } from "../../context/loginContext";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link, BrowserRouter } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.token = cookie.load("token");
    this.state = {
      status: "top",
    };
  }

  static contextType = LoginContext;
  async handleLogOut() {
    await this.context.logout();
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "") {
          this.setState({ status: "" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          variant="dark"
          className="navbar-header"
          id="mynav"
          style={{
            backgroundColor:
              this.state.status === "top"
                ? "rgba(0, 0, 0, 0.)"
                : "wheat",
            color: this.state.status === "top" ? "black" : "black",
            boxShadow:
              this.state.status === "top"
                ? "0 8px 4px rgba(0, 0, 0, 0.0)"
                : "0 3px 2px rgba(0, 0, 0, 0.1)",
            transition: "4s",
            textShadow:
              this.state.status === "top"
                ? "0 0 1px #fff, 0 0 1px #fff"
                : "0 0 1px #FFF, 0 0 1px #FFF",
          }}
        >
          <BrowserRouter>
            <Container>
              <Navbar.Brand href="/">
                {/* liquid spacefood */}
<p className="foood" style={{}}> SPACE FOOD</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav  className="me-2">
                  {/* <Nav.Link href="/">
                    Home
                    <Link to="/"></Link>
                  </Nav.Link> */}
                  <Nav.Link href="/restaurants">
                    restaurants
                    <Link to="/restaurants"></Link>
                  </Nav.Link>
                  <Nav.Link href="/aboutus#meetourteam">
                    About-Us
                    <Link to="/aboutus#meetourteam"></Link>
                  </Nav.Link>

                  {this.token ? (
                    <>
                      <Nav.Link href="/profile">
                        Profile
                        <Link to="/profile"></Link>
                      </Nav.Link>
                      <Nav.Link
                        href="/"
                        onClick={() => {
                          this.handleLogOut();
                        }}
                      >
                        Sign-Out
                        <Link to="/"></Link>
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link eventKey={2} href="/login">
                      Sign-In
                      <Link to="/login"></Link>
                    </Nav.Link>
                  )}
                  <Nav.Link className="carticon" href="/cart">
            <ShoppingCartIcon />
          </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </BrowserRouter>
        </Navbar>
      </>
    );
  }
}

export default Header;