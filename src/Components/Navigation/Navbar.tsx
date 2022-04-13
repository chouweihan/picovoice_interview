import React from 'react'
import { Navbar as BootstrapNav, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <BootstrapNav bg="dark" expand="lg" variant="dark">
    <Container>
      <BootstrapNav.Brand>Wei-Han Chou</BootstrapNav.Brand>
      <BootstrapNav.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNav.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={ Link } to="/">Home</Nav.Link>
            <Nav.Link as={ Link } to="/pytorch">Pytorch</Nav.Link>
            <Nav.Link as={ Link } to="/googlewidget">Google Widget</Nav.Link>
        </Nav>
      </BootstrapNav.Collapse>
    </Container>
  </BootstrapNav>
  )
}

export default Navbar