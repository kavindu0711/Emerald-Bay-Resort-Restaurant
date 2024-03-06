import React from 'react'
import logo from "../images/EMERALDBAYLOGO.png"
import "../common/Home.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import restaurantadminsec from "../images/restaurantadminsec.jpg";




export const AdminHome = () => {

  const navigate = useNavigate(); // Initialize useNavigate

  const handleAdminButtonClick = () => {
    navigate('./admin'); // Redirect to '/admin' route
  };

  return (
    <div>
        <div className="adminNavbar">
          <Navbar bg='dark' expand="lg" className="bg-body-tertiary" style={{fontSize:'25px'}}>
              <Container fluid>
                <Navbar.Brand href="/"><img src={logo} alt="logo" width={'200px'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0 ms-auto"
                    style={{ maxHeight: '100px', gap: '40px', textAlign: 'left' }}
                    navbarScroll
                  >
                    
                  </Nav>
                
                    <Button variant="outline-success"  onClick={handleAdminButtonClick}  style={{ fontSize: '25px' }}>Admin Dashboard</Button>
                  
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>

        <div className="admincontainer">
          <img src={restaurantadminsec} alt="admin frontend home" />
          <div className="pictext">
                <h1>EMERALD BAY RESTAURANT</h1>
          </div>
        </div>

        <div className="adminfooter">
          <h2>All Right Reserved</h2>
        </div>
    </div>
  )
}
