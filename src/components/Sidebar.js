// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column bg-dark text-white p-3">
      <h2 className="text-center mb-4">Menu</h2>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/clientes" className="text-white">Clientes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/configuracoes" className="text-white">Configurações</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
