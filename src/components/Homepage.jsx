import { useState, useEffect } from 'react'
import '../styles/Homepage.css'
import ProjectContainer from './ProjectContainer.jsx'
import SubContainer2 from './SubContainer2.jsx'
import ProjectInstance from './ProjectInstance.jsx'

function Homepage({projSelected, setProjSelected}) {

  // Project banner auto switch logic
    const projectBD = {name:'projectBD', img:'projectBD.png', banner_img:'projectBD.png', description:'Empower the voice of Bangladesh Hindus against Tyranny'}
    const fitnessApp = {name:'Fitness Interval Timer', img:'IntervalTimer.png', banner_img:'IntervalTimer4.png', description:'Prototype for an interval timer Fitness App'}
    const GCBC = {name:'GCBC', img:'GCBC_projectspage.avif', banner_img:'GCBC.png', description:'Supporting a Local Church and maintaining their Website'}

  const banners = [
    <ProjectContainer proj={projectBD} projSelected={projSelected} setProjSelected={setProjSelected}/>,
    <ProjectContainer proj={fitnessApp} projSelected={projSelected} setProjSelected={setProjSelected}/>,
    <ProjectContainer proj={GCBC} projSelected={projSelected} setProjSelected={setProjSelected}/>,
  ]

  const [currentBanner, setCurrentBanner] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner)=> (prevBanner + 1) % banners.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])



  return (
    <>
      
      <div className='main-container'>
        
        <img className='main-image' src='placeholder.png'/>
        <div className='main-container-textbox'>
          <div className='textbox-container'>
            <h1 className='textbox-header'>Andy Zhou</h1>
            <p className='textbox-text'>Software Engineer</p>
            <p className='textbox-text'>Dedicate, Design, Develop</p>
          </div>
          <button className='view-more-button'>View more</button>
        </div>
      </div>

      <div className="banner-carousel-container">
        <div class='featured-container'>
          <h2 className='project-text-featured'>Featured Projects</h2>
        </div>
        <div
          className="banner-carousel"
          style={{
            transform: `translateX(-${currentBanner * 100}vw)`, // Adjust position based on currentBanner
          }}
        >
          {banners.map((banner, index) => (
            <div className="banner" key={index}>
              {banner}
            </div>
          ))}
        </div>
      </div>

      {projSelected && (
        <>
          <ProjectInstance proj={projSelected} setProj={setProjSelected}/>
        </>
      )}

      <SubContainer2/>
    </>
  )
}

export default Homepage
