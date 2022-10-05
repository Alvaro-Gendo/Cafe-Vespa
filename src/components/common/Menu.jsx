import {Container, Nav, Navbar } from "react-bootstrap";


const Menu = () => {
    return (
        <Navbar bg="danger"  expand="lg">
        <Container>
          <Navbar.Brand href="/"  className="text-white" >Cafeteria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  className="text-white" href="/">Inicio</Nav.Link>
              <Nav.Link  className="text-white" href="/administrador">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;