"use client";
import React from 'react';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px', // Espaçamento interno
      backgroundColor: '#1c1c1c', // Cor de fundo escura
      color: '#ffffff', // Cor do texto dos links
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Nome "IAra" como logo */}
      <div>
        <h1 style={{ color: '#00d46d', fontSize: '1.5rem', margin: 0 }}>IAra</h1>
      </div>

      {/* Links de navegação */}
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Telegram</a></li>
          <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>WhatsApp</a></li>
          <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Sobre nós</a></li>
          <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Benefícios</a></li>
          <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Como funciona</a></li>
          <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Depoimentos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;