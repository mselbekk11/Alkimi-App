import React from "react";
import './navbar.css'
import Logo from '../../assets/img/logo.png';
import ButtonArrow from '../../assets/img/button-arrow.png';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className="nav-container">
            <nav className="nav">
                <div className="logo">
                <Link to="/"><img src={Logo} alt="metamask logo"></img></Link>
                </div>
                <div className="nav-items">
                    {/* <a href="#">Courses</a>
                    <a href="#">Contact</a> */}
                    <Link to="/">Home</Link>
                    <Link to="/constellation">Courses</Link>
                    <a href="#"><button>Sign in<img src={ButtonArrow} alt="metamask logo"></img></button></a>
                </div>
            </nav>
        </div>
      );
}

export default NavBar;