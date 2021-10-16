import React, { Component } from "react";
import cookie from "react-cookies";
import { LoginContext } from "../../context/loginContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

import { Link, BrowserRouter } from "react-router-dom";
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
                ? "rgba(255, 255, 255, 0.0)"
                : "#76C6FF",
            color: this.state.status === "top" ? "black" : "white",
            boxShadow:
              this.state.status === "top"
                ? "0 8px 4px rgba(0, 0, 0, 0.0)"
                : "0 3px 2px rgba(0, 0, 0, 0.1)",
            transition: "1s",
            textShadow:
              this.state.status === "top"
                ? "0 0 1px #003cff, 0 0 1px #003cff"
                : "0 0 1px #FFF, 0 0 1px #FFF",
          }}
        >
          <BrowserRouter>
            <Container>
              <Navbar.Brand href="/">
                
                <img
                  src="https://avatars.githubusercontent.com/u/90194344?s=400&u=4af0645b923aae23a60c99fc7b554f4968ed3371&v=4"
                  alt="logo home"
                  style={{ width: "10%" }}
                  className="o2art-logo"
                />
                
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="/">
                    Home
                    <Link to="/"></Link>
                  </Nav.Link>
                  <Nav.Link href="/restaurants">
                    restaurants
                    <Link to="/restaurants"></Link>
                  </Nav.Link>
                  <Nav.Link href="/aboutus">
                    About-Us
                    <Link to="/aboutus"></Link>
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