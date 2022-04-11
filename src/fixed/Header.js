import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as MainLogo} from '../img/logo.svg'

function Header() {

    return (
        <nav className="navbar">
            <Link to="/">
                <MainLogo />
            </Link>
            <Link to="/glossary" className="glossary-link">
                <h1>Glossary</h1>
            </Link>
        </nav>
    )
}

export default Header
