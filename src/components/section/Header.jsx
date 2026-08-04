import React, { useState } from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* 햄버거 버튼 */}
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            <header id='header' role='banner'>
                <Logo />
                <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
                <Sns />
            </header>
        </>
    );
};

export default Header;


