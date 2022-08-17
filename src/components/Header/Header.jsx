import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSSclass from "./Header.module.css"
import LogoImage from './LogoImage/LogoImage';
import NavLinks from './NavLinks/NavLinks';


const Header = () => {
    return (
        <header className={CSSclass.header_nav} >
           <LogoImage />
           <NavLinks />
        </header>
    );
};

export default Header;
