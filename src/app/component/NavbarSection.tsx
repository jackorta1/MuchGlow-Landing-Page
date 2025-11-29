"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import React from 'react';
import Link from 'next/link';
import Logo from "../../../public/muchglow.png";
import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
 
 

const NavbarSection = () => { 
  return (
    <div className='navBg'>
    <div className='container'>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} width={200} className='img-fluid'  alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto ms-auto">
              <Link href="/" className='custLink'>🏠 Home</Link>
              <Link href="/ai-beauty" className='custLink'>🤖 AI Beauty Test</Link>
              <Link href="/#saloons" className='custLink'>💅 Salons</Link>
              <Link href="/#customers" className='custLink'>👥 Customers</Link>
              <Link href="/#gallery" className='custLink'>🖼️ Gallery</Link>
              <Link href="/#partner" className='custLink'>🤝 Become a Partner</Link>
            </Nav>
            <Nav>
            <Nav.Link href="/ar"  className='mx-2 fs-4 fw-bold'>
            العربية
              </Nav.Link> 
 
            {/* <Nav.Link href="#instagram" className='mx-2'>
              <FontAwesomeIcon icon={faInstagram} className='fs-3' />
              </Nav.Link>
              <Nav.Link href="#linkedin" className='mx-2'>
                <FontAwesomeIcon icon={faLinkedinIn} className='fs-3' />
              </Nav.Link>  */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </div>
  );
};

export default NavbarSection;
