import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import CSSclass from "./NavLinks.module.css"


const NavLinks = () => {
    return (
        <div className={CSSclass.navlinks}>
            <NavLink to='/' className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Головна</NavLink>
            <NavLink to='/about' className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Про Пласт</NavLink>
            <NavLink to='/news' className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Новини</NavLink>
            <NavLink to='/team' className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Команда</NavLink>
            <NavLink to='/for-scouts' className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Для пластунів</NavLink>
            <NavLink to='/join' className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Долучитись</NavLink>
            {/* <a href="#" className={navData => navData.isActive ? CSSclass.active : CSSclass.no_active}>Підтримати</a> */}
            <Dropdown className={CSSclass.position}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={CSSclass.text}>
                    Підтримати
                </Dropdown.Toggle>

                <Dropdown.Menu className={CSSclass.dropmenu}>
                    <Dropdown.Item href="#/action-1" className={CSSclass.item}>PayPal</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className={CSSclass.item}>Amazon</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </div>
    );
};

export default NavLinks