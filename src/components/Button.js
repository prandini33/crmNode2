// src/components/Button.js
import React from 'react';

function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="login-button">
      {children}
    </button>
  );
}

export default Button;
