import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Image,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import logo from "./img/logo.png";

const Nb = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./desgin">What we do</Nav.Link>
            <Nav.Link href="#tecId">Technologies</Nav.Link>
            <Nav.Link href="./Coder">Coder</Nav.Link>
            <Nav.Link href="./Blog">Blogs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Nb;
