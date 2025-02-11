import React from 'react';
import '../styles/Navbar.css'

function Navbar ({ isVisible, currentPage, setCurrentPage }) {
    return(
        <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className='nav-container'>
                <a href='/' className='nav-logo-container'>
                    <img className='nav-logo' src='/logo.png'/>
                    <p>Andy Zhou</p>
                </a>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a onClick={()=>setCurrentPage('Homepage')} className='nav-links'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={()=>setCurrentPage('AboutMe')} className='nav-links'>About me</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={()=>setCurrentPage('Projects')} className='nav-links'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a onClick={()=>setCurrentPage('Interests')} className='nav-links'>Interests</a>
                    </li>
                    <li className='nav-item'>
                        <button className='contact-button' onClick={()=>setCurrentPage('ContactMe')}>Contact me</button>
                    </li>
                </ul>
            </div>

        </nav>
    )
} export default Navbar;