// src/components/Header.js
import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="light" className="px-4 shadow-sm header">
      <Container fluid>
        <Navbar.Brand>CRM Dashboard!</Navbar.Brand>
        <Navbar.Text className="me-2">Bem-vindo, Usuário!</Navbar.Text>
        <Button variant="danger" className="logout-button">Sair</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
