import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as MainLogo} from '../img/logo.svg'

function Header() {

    return (
        <nav className="navbar">
            <Link to="/">
                <MainLogo />
            </Link>
            <div className="navbar-container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="#home"><img className="profile-pic" src="" alt=""></img></a></li>
                    <li><a href="#home">Account</a></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Favorites</a></li>
                    <li><a href="#food">Recipes</a></li>
                    <li><a href="#food">Glossery</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
