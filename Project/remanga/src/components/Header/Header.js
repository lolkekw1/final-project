import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link to="/main">
              <img src={logo} alt="OtakuLab Logo" className="header-logo" />
            </Link>
          </li>
          <li><Link to="/News">Новости</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/popular">Популярное</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile">Профиль</Link></li>
              <li><button onClick={handleLogout}>Выход</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Вход</Link></li>
              <li><Link to="/register">Регистрация</Link></li>
              <li><Link to="/profile">Профиль</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
