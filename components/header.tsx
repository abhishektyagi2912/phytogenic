"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { getCollections } from "@/lib/actions/actions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const fetchedCollections = await getCollections();
      setCollections(fetchedCollections.reverse());
    };
    fetchCollections();
  }, []);

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
            <NavDropdown title="Collections" id="basic-nav-dropdown" className="px-2 link-dark">
              {collections.map((collection: CollectionType) => (
                <NavDropdown.Item key={collection._id} href={`/Product/${collection._id}`}>
                  {collection.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/About" className="px-2 link-dark">About</Nav.Link>
            <Nav.Link href="/Contact" className="px-2 link-dark">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
