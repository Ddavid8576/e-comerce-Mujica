import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/LOGO-m.png';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#295927' }}>
      <a className="navbar-brand text-white" href="#">
      <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
        SHIRLEY STYLE
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item text-white">
            <a className="nav-link text-white" href="#">Inicio</a>
          </li>
          <li className="nav-item text-white">
            <a className="nav-link text-white" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
