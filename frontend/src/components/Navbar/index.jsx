import React, { useContext, useState } from 'react';
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa'
import './index.css';
import { ShopContext } from '../../context/ShopContext';
import Login from './Login';

const Navigation = () =>{

    const {setShowSearch} = useContext(ShopContext);

    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () =>{
      setShowLogin(!showLogin);
    }
    return(
      <>
    <Navbar collapseOnSelect expand="sm" className="px-3"  >
           <Container>
      <Navbar.Brand as={NavLink} to="/">
        <img
          src={logo}
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className='mx-auto'>
          <Nav.Link to="/" as={NavLink}>
             {({ isActive }) => (
                <span className={isActive ? "active" : ""}>HOME</span>
             )}
          </Nav.Link>
            <Nav.Link to="/collection" as={NavLink}>
             {({ isActive }) => (
                <span className={isActive ? "active" : ""}>COLLECTION</span>
             )}
          </Nav.Link>

          {/* COLLECTION with Dropdown */}
          {/* <NavDropdown
            title="COLLECTION"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item as={NavLink} to="/collection/bedroom">
              Bedroom
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/collection/living">
              Living
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/collection/dining">
              Dining
            </NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link as={NavLink} to="/about">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>ABOUT</span>
            )}
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>CONTACT</span>
            )}
          </Nav.Link>
        </Nav>
     </Navbar.Collapse>

      <Nav className="ms-auto d-flex align-items-center" style={{ gap: '20px' }}>
      
      {/* Search Icon */}
        <Nav.Link className="p-0">
          <span onClick={() => setShowSearch(true)}><FaSearch size={20} /></span>
        </Nav.Link>
      
      {/* Profile Icon with Dropdown */}
        <Nav.Link className="p-0" onClick={handleLogin}>
          <FaUser size={20} />
        </Nav.Link>
      
      {/* Shopping Bag Icon */}
      <Nav.Item>
        <Nav.Link as={NavLink} to='/cart' className="p-0">
          <FaShoppingBag size={20} />
        </Nav.Link>
      </Nav.Item>

    </Nav>
</Container> 
    </Navbar>
    {showLogin &&
     <Login
                show={showLogin}
                close={handleLogin}
            />}
            
    </>
    
    );

}

export default Navigation;
