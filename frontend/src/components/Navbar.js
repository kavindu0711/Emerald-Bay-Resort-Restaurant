import logo from './images/EMERALDBAYLOGO.png'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg='dark' expand="lg" className="bg-body-tertiary" style={{fontSize:'25px'}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" width={'200px'} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px', gap: '40px', textAlign: 'left' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3"  style={{ fontSize: '22px' }}>Appetizer</NavDropdown.Item>
              <NavDropdown.Item href="#action4"  style={{ fontSize: '22px' }}>
                Salads
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5"  style={{ fontSize: '22px' }}>
                Side Order
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6"  style={{ fontSize: '22px' }}>
                Soup
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7"  style={{ fontSize: '22px' }}>
                Lunch & Dinner
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7"  style={{ fontSize: '22px' }}>
                Dessert
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8"  style={{ fontSize: '22px' }}>
                Beverages
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action9">Reservations</Nav.Link>
            <Nav.Link href="#action10">Gallery</Nav.Link>
            <Nav.Link href="#action11">Contact</Nav.Link>
          </Nav>
         
            <Button variant="outline-success"  style={{ fontSize: '25px' }}>Order Online</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
/*
import logo from './images/EMERALDBAYLOGO.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add event listener to handle scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${isScrolled ? 'bg-green' : ''}`}
      style={{ fontSize: '25px', transition: 'background-color 0.3s' }}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" width={'200px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px', gap: '40px', textAlign: 'left' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ fontSize: '22px' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ fontSize: '22px' }}>
              About
            </Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" style={{ fontSize: '22px' }}>
                Appetizer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{ fontSize: '22px' }}>
                Salads
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" style={{ fontSize: '22px' }}>
                Side Order
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6" style={{ fontSize: '22px' }}>
                Soup
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7" style={{ fontSize: '22px' }}>
                Lunch & Dinner
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7" style={{ fontSize: '22px' }}>
                Dessert
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8" style={{ fontSize: '22px' }}>
                Beverages
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action9" style={{ fontSize: '22px' }}>
              Gallery
            </Nav.Link>
            <Nav.Link href="#action9" style={{ fontSize: '22px' }}>
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="outline-success" style={{ fontSize: '25px' }}>
            Order Online
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;*/
