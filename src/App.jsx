import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './components/Homepage.jsx'
import AboutMe from './components/AboutMe.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Interests from './components/Interests.jsx'
import ContactMe from './components/ContactMe.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState('Homepage')

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navbar appearing when scroll up logic
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

  // Logic for when a Project is clicked on
  const [projSelected, setProjSelected] = useState(null)

  useEffect(()=>{
    if(projSelected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    };
  },[projSelected])


  return (
    <>
      <div className='all-content'>
      <Navbar isVisible={scrollUp} currentPage={currentPage} setCurrentPage={setCurrentPage} 
      isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <div className='main-content'>
        {currentPage === 'Homepage' && <Homepage currentPage={currentPage} setCurrentPage={setCurrentPage} projSelected={projSelected} setProjSelected={setProjSelected}/>}
        {currentPage === 'AboutMe' && <AboutMe/>}
        {currentPage === 'Projects' && <ProjectsPage projSelected={projSelected} setProjSelected={setProjSelected}/>}
        {currentPage === 'Interests' && <Interests/>}
        {currentPage === 'ContactMe' && <ContactMe/>}
      </div>
      <Footer />
      </div>
    </>
  )
}

export default App
