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

const NavbarSectionAr = () => { 
  return (
    <div className='navBg'>
      <div className='container'>
        <Navbar collapseOnSelect expand="lg">
          <Container> 
          <Navbar.Brand href="/" className='menuNone'>
            <Image src={Logo} width={200} className='img-fluid'   alt="Logo" />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='menuNoneMbl'>
                
                {/* <Nav.Link href="#instagram" className='mx-2'>
                  <FontAwesomeIcon icon={faInstagram} className='fs-3' />
                </Nav.Link>
                <Nav.Link href="#linkedin" className='mx-2'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='fs-3' />
                </Nav.Link>  */}
                <Nav.Link href="/en" className='mx-2 fs-5 fw-bold'>
                   English
                </Nav.Link> 
              </Nav>
              <Nav className="me-auto ms-auto">
                <Link href="/ar" className='custLink'>🏠 الرئيسية</Link>
                <Link href="/ar/ai-beauty" className='custLink'>🤖 اختبار الجمال بالذكاء الاصطناعي</Link>
                <Link href="/ar/#saloons" className='custLink'>💅 صالونات</Link>
                <Link href="/ar/#customers" className='custLink'>👥 العملاء</Link>
                <Link href="/ar/#gallery" className='custLink'>🖼️ معرض الصور</Link>
                <Link href="/ar/#partner" className='custLink'>🤝 كن شريكاً</Link>
              </Nav> 
              <Nav className='menuNone'>
                
                {/* <Nav.Link href="#instagram" className='mx-2'>
                  <FontAwesomeIcon icon={faInstagram} className='fs-3' />
                </Nav.Link>
                <Nav.Link href="#linkedin" className='mx-2'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='fs-3' />
                </Nav.Link>  */}
                <Nav.Link href="/en" className='mx-2 fs-5 fw-bold'>
                   English
                </Nav.Link> 
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/" className='menuNoneMbl'>
              <Image src={Logo} width={200} className='img-fluid' height={40} alt="Logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarSectionAr;
