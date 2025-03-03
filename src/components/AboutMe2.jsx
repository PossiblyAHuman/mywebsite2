import '../styles/AboutMe2.css'
import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const AboutMe2 = () => {
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

        <div className='aboutme2'>
            <h1 style={{backgroundColor:'orange'}}>WORK IN PROGRESS</h1>
            <div className='aboutme2-main'>
                <div className='aboutme2-main-left'>
                    <div className='aboutme2-textbox'>
                        <h1 className='aboutme2-textbox-header'>About me:</h1>
                        <p>Hi, I'm Andy Zhou. A software engineer based in New York City</p>
                        <div>
                            Since 2017 I have been learning about technology, and solving complex technical problems. I have a solid understanding of web development, low level programming concepts, and computer hardware. 
                            I am excited to talk with you about these topics and maybe help you with your technical problems too!
                        </div>
                    </div>
                </div>
                <div className='aboutme2-main-right'>
                    <div className='placeholder'>placeholder img</div>
                    <img className='aboutme2-main-img' src='placeholder3.png'/>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
        </>
    )
}; export default AboutMe2