import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CSSclass from "./Footer.module.css"
import img from "./../../images/facebook_official_logo_icon_169181.png"


const Footer = () => {
    return (
        // <footer className={CSSclass.foot}>
        //     <a className={CSSclass.author}>Створено Владом і Антоном</a>
        //     <a className={CSSclass.contacts}>Контакти</a>
        // </footer>
        <footer className={CSSclass.foot}>
            <div className={CSSclass.author}>Приготовано</div>
            <div className={CSSclass.contacts}>Контакти</div>
            <div className={CSSclass.links}>
                <a href="#">
                <img src={img}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;