// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Header />
        <div className="content-area container mt-4">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Widget 1</h5>
                  <p className="card-text">Conteúdo do widget 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Widget 2</h5>
                  <p className="card-text">Conteúdo do widget 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Widget 3</h5>
                  <p className="card-text">Conteúdo do widget 3.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Visão Geral</h2>
              <p className="card-text">Bem-vindo ao painel do CRM. Aqui você verá uma visão geral dos seus dados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
