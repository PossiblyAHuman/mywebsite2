import React from 'react';
import '../styles/Navbar.css'
import { useState } from 'react';

function Navbar ({ isVisible }) {

    
    return(
        <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className='nav-container'>
                <a href='/' className='nav-logo-container'>
                    <img className='nav-logo' src='/logo.png'/>
                    <p>Andy Zhou</p>
                </a>

                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a href='/' className='nav-links'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/about' className='nav-links'>About me</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/projects' className='nav-links'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/interests' className='nav-links'>Interests</a>
                    </li>
                    <li className='nav-item'>
                        <button className='contact-button' onClick={()=>window.location.href = '/contact'}>Contact me</button>
                    </li>
                </ul>

                <div className='nav-hamburger'>
                    <img className='nav-hamburger-icon' src='Hamburger_icon.png' onClick={()=>{alert("work in progress")}}/>
                </div>
            </div>

        </nav>
    )
} export default Navbar;