import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import ProjectContainer from './components/ProjectContainer.jsx'
import SubContainer from './components/SubContainer.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './Homepage.jsx'
import AboutMe from './components/AboutMe.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Interests from './components/Interests.jsx'
import ContactMe from './components/ContactMe.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState('Homepage')

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



  return (
    <>
      <div className='all-content'>
      <Navbar isVisible={scrollUp} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className='main-content'>
        {currentPage === 'Homepage' && <Homepage/>}
        {currentPage === 'AboutMe' && <AboutMe/>}
        {currentPage === 'Projects' && <ProjectsPage/>}
        {currentPage === 'Interests' && <Interests/>}
        {currentPage === 'ContactMe' && <ContactMe/>}
      </div>
      <Footer />
      </div>
    </>
  )
}

export default App
