import '../styles/Interests.css'
import InterestComputer from './interestSections/InterestComputer';
import InterestGaming from './interestSections/InterestGaming';
import InterestArt from './interestSections/InterestArt';
import InterestFinance from './interestSections/InterestFinance';

import { useState, useEffect } from 'react';
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

const Interests = () => {
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
    return (
        <>
        <div className='all-content'>
        <Navbar isVisible={scrollUp}/>
        <div className='main-content'>
            <h1 style={{backgroundColor:'orange'}}>WORK IN PROGRESS</h1>
            <div className='interests'>
                <InterestComputer/>
                <InterestGaming/>
                <InterestFinance/>
                <InterestArt/>
            </div>
        </div>
        <Footer/>
        </div>
        </>
    )
}; export default Interests