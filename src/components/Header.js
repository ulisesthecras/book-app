import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onAddNewBookClick }) => {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
      <h1>BookTrack</h1>
      <button
        onClick={onAddNewBookClick}
        style={{ padding: '10px 20px', borderRadius: '25px', backgroundColor: '#2563eb', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Añadir nuevo libro
      </button>
    </header>
  );
};

Header.propTypes = {
  onAddNewBookClick: PropTypes.func.isRequired,
};

export default Header;
