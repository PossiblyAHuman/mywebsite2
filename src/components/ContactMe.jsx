import '../styles/ContactMe.css'

import { useState, useEffect } from 'react';
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
const ContactMe = () => {
      const [scrollUp, setScrollUp] = useState(true)
    
      const [lastScrollY, setLastScrollY] = useState(0)
    
      const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
          setScrollUp(true)
        } else if (window.scrollY > lastScrollY) {
          setScrollUp(false)
        }
    
        setLastScrollY(window.scrollY)
      }
    
      useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      },[lastScrollY])

    return(
        <> 
        <div className='all-content'>
        <Navbar isVisible={scrollUp}/>
        <div className='main-content'> 
            <div className="contact">
                
                <div className="contact-form-container">
                <div className='contact-form-container2'>
                    <img src='blue.png' className='contact-form-logo'></img>
                    <div className='contact-form-header'>
                        <div className='contact-form-header-header'>Contact Me</div>
                        <div>Get in touch with me to learn more!</div>
                    </div>
                    <form className='contact-form'>
                        <div>
                            <div className='contact-form-section'>Company/Organization:</div>
                            <input className='contact-form-info1'></input>
                        </div>
                        <div className='contact-form-name-box'>
                            <div className='contact-form-name'>
                                <div className='contact-form-section'>First Name:</div>
                                <input className='contact-form-info1'></input>
                            </div>
                            <div className='contact-form-name'>
                                <div className='contact-form-section'>Last Name:</div>
                                <input className='contact-form-info1'></input>
                            </div>
                        </div>
                        <div>
                            <div className='contact-form-section'>Email:</div>
                            <input className='contact-form-info1'></input>
                        </div>
                        <div>
                            <div className='contact-form-section'>Message:</div>
                            <textarea className='contact-form-info2'></textarea>
                        </div>
                        {/*<button className='contact-form-button' onClick={()=>alert("work in progress")}>Submit</button>*/}
                        <div className='contact-form-button' onClick={()=>alert("work in progress")}>Submit</div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        </>
    )
}; export default ContactMe