import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/styles/style-Navbar.css"
import "../App.css"

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary border rounded my-3">
      <Container fluid>
        <Navbar.Brand href="#"><img src="logo.png" alt="" srcSet="" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src="logo.png" alt="" srcSet=""  className='logo'/>
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
            
              <button className='custom-btn'>Login</button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
