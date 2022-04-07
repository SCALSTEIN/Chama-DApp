import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#">Inua MwanaDada</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create-chama">
              Create Chama
            </Nav.Link>
            <Nav.Link as={Link} to="/chamas">
              Available Chamas
            </Nav.Link>
            <Nav.Link as={Link} to="/my-account">
              My Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
