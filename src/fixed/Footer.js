import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as MainLogo} from '../img/logo.svg'

function Footer() {

    return (
        <div className="footer">
            <div className="logo-container">
                <Link to="/">
                    <MainLogo />
                </Link>    
            </div>
            <div className="social-links">
                <a rel="noreferrer"   target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <img src="../img/logo_youtube.png" alt="" />    
                </a>
                <a rel="noreferrer"  target="_blank" href="https://deletefacebook.com/">
                    <img src="../img/logo_facebook.png" alt="" />    
                </a>
                <a rel="noreferrer"  target="_blank" href="https://www.instagram.com/">
                    <img src="../img/logo_instagram.png" alt="" />    
                </a>
                <a rel="noreferrer"  target="_blank" href="twitter.com/johntlovato">
                    <img src="../img/logo_twitter.png" alt="" />    
                </a>
            </div>
            <div className="footer-links">
                <img className="cheers" src="../img/cheers.png" alt="Cheers!"/>
                <div className="link-container">
                    <div className="link-block">
                        <a rel="noreferrer"  target="_blank" href="johntlovato.com">Portfolio</a>
                        <a rel="noreferrer" target="_blank" href="github.com/jtlovato">Github</a>
                        <a rel="noreferrer" target="_blank" href="twitter.com/johntlovato">Twitter</a>
                        <a rel="noreferrer" target="_blank" href="linkedin.com/in/jtlovato">LinkedIn</a>
                    </div>
                    <span className="divider"></span>
                    <span className="divider"></span>
                    <div className="link-block">
                        <a rel="noreferrer" href="tel:682-283-1972">Call Me</a>
                        <a rel="noreferrer" href="mailto: jtlovato@gmail.com">Email Me</a>
                        <a rel="noreferrer" target="_blank" href="https://www.hearst.com/-/us-magazines-terms-of-use">Terms Of Use</a>
                        <a rel="noreferrer" target="_blank" href="https://www.hearst.com/-/us-magazines-privacy-notice#_ADDITIONAL_INFO">Privacy Rights</a>
                    </div>
                </div>
            </div>
        
        
        </div>
    )
}

export default Footer