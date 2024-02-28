import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../styles/style-Navbar.css"
import "../App.css"

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border rounded m-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src="./public/logo.png" alt="" srcset="" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src="./public/logo.png" alt="" srcset=""  className='logo'/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Shop</Nav.Link>
              <Nav.Link href="#action2">Vendor</Nav.Link>
              <Nav.Link href="#action2">Contact us</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>

            </Nav>
            
              <Button className='custom-btn'>Login</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
