"use client"
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky-top bg-light border-bottom">
      <Navbar expand="md" className="container-fluid py-3 px-4">
        <div className="d-flex align-items-center">
          <Image src="/logo.jpg" alt="logo" width={50} height={50} />
          <Link href="/" className="plantly-link ms-3 fw-bold fs-4 text-dark text-decoration-none">Phytogenic</Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={`${isOpen ? 'show' : ''}`}>
          <Nav className="ms-auto">
            <Nav.Link href="/" className="px-2 link-secondary">Home</Nav.Link>
            <NavDropdown title="Features" id="basic-nav-dropdown" className="px-2 link-dark">
              <NavDropdown.Item href="#feature1">Feature 1</NavDropdown.Item>
              <NavDropdown.Item href="#feature2">Feature 2</NavDropdown.Item>
              <NavDropdown.Item href="#feature3">Feature 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className="px-2 link-dark">Pricing</Nav.Link>
            <Nav.Link href="#faqs" className="px-2 link-dark">FAQs</Nav.Link>
            <Nav.Link href="/about" className="px-2 link-dark">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
