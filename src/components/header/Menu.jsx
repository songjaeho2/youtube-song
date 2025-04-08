import React from 'react';
import { headerMenus } from '../../data/header';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Menu = () => {
  const location = useLocation();

  return (
    <nav className='sidebar'>
      <h1 className='sidebar__title'>
        <span>SONG JAE HO</span>
        <br />
        <span>PORTFOLIO</span>
      </h1>

      <ul className='menu'>
        {headerMenus.map((menu, index) => (
          <li key={index} className={location.pathname === menu.src ? 'active' : ''}>
            <Link to={menu.src}>
              {menu.icon}
              <span>{menu.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="divider" />

      <div className="profile-box">
        <div className="profile-row">
          <span className="label">TOP</span>
          <span className="value">100–105</span>
        </div>
        <div className="profile-row">
          <span className="label">PANTS</span>
          <span className="value">28–30</span>
        </div>
        <div className="profile-row">
          <span className="label">SHOES</span>
          <span className="value">280</span>
        </div>

        <div className="divider" />

        <div className="profile-sub">
          <span className="number">180</span>
          <span className="unit">cm</span>
          <span className="bar">|</span>
          <span className="number">70</span>
          <span className="unit">kg</span>
        </div>
      </div>

      <div className="divider" />

      <a href="https://instagram.com" className="instagram-btn" target="_blank" rel="noreferrer">
        <FaInstagram className="insta-icon" />
        <span>Instagram</span>
      </a>
    </nav>
  );
};

export default Menu;


