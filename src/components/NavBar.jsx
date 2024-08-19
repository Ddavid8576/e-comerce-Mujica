import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/LOGO-m.png';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#83c997' }}>
      <Link className="navbar-brand text-white" to="/">
        <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
        SHIRLEY STYLE
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/category/productos">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/category/servicios">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/category/herramientas">Herramientas</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
