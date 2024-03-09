import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/styles/style-Navbar.css"
import "../App.css"
import { Link, NavLink } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border rounded my-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src="logo.png" alt="" srcSet="" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src="logo.png" alt="" srcSet="" className='logo' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">

              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/product-details" className="nav-link">Product details</NavLink>
              <NavLink to="/contact" className="nav-link">Contact us</NavLink>
            </Nav>
            <Link to="/login">
              <button className='custom-btn'>Login</button>
            </Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
