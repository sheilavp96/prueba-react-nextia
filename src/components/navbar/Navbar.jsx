import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <img src={logo} className="navbar__logo" />
      <div className="navbar__modal">
        <h3 className="navbar__title">Bienvenido</h3>
        <h3 className="navbar__logout">Cerrar sesión</h3>
      </div>
    </div>
  );
};

export default Navbar;
