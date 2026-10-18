import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header({ orgName }) {
  return (
    <header>
      <Navbar expand="lg" sticky="top" variant="dark" className="egds-navbar">
        <Container fluid className="px-lg-5">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
            <img src="/assets/logo.png" alt="logo" height="40" />
            <span className="fw-bold">{orgName}</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Главная</Nav.Link>

              <NavDropdown title="Каталог оборудования" id="catalog-dropdown">
                <NavDropdown.Item as={Link} to="/catalog/avtomatika">Автоматика проезда</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/catalog/radioupravlenie">Радиоуправление</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/catalog/svobodnyy-vyezd">Свободный выезд</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
              <Nav.Link as={Link} to="/cart">Корзина</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="tel:+78001003899">+7(800)100-38-99</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;