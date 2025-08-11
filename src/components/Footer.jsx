"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 0 8px 0',
      background: 'linear-gradient(90deg, #161b22 60%, #202020 100%)',
      color: '#aaaaaa',
      width: '100%',
      marginTop: 'auto',
      borderTop: '1px solid #222',
      fontSize: '0.95rem',
      boxSizing: 'border-box',
    }}>
      <h1 style={{ color: '#00d46d', fontSize: '1.2rem', margin: 0, letterSpacing: 0 }}>IAra</h1>
      <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: '#aaaaaa', textAlign: 'center' }}>
        &copy; 2025 IAra. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;