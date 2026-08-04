import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className="header__logo">
            <Link to="/" className="logo__text">
                <span className="logo__name">SONG JAE HO</span>
                <span className="logo__sub">PORTFOLIO</span>
            </Link>
        </h1>
    );
};

export default Logo;
