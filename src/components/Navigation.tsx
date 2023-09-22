import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cadastropage" className="navbar-link">
            Cadastro
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
