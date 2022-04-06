import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import Input from './input'
import {Link} from 'react-router-dom'

function NavBar({setTitle}) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">alialala</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={ Link} to ='/movie'>Movie</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Input  onChange={(e)=> setTitle(e.target.value)}  setTitle = {setTitle} />
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar