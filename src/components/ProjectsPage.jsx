import '../styles/ProjectsPage.css'
import ProjectInstance from './ProjectInstance';
import FitnessIntervalTimer from './projects/FitnessIntervalTimer.jsx'
import ProjectBD from './projects/ProjectBD.jsx';
import GCBC from './projects/GCBC.jsx';
import RealTimeChat from './projects/RealTimeChat.jsx';

import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Footer from './Footer.jsx';

const ProjectsPage = () => {

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


    const [projSelected, setProjSelected] = useState(null)

    const projectBD = {name:'projectBD', img:'pbd_home1.png', banner_img:'pbd_home1.png', description:'Empower the voice of Bangladesh Hindus against Tyranny', projComponent: <ProjectBD/>}
    const fitnessApp = {name:'Fitness Interval Timer', img:'IntervalTimer.png', banner_img:'IntervalTimer4.png', description:'Prototype for an interval timer Fitness App', projComponent: <FitnessIntervalTimer/>}
    const GCBCproj = {name:'GCBC', img:'GCBC_projectspage.avif', banner_img:'GCBC.png', description:'Supporting a Local Church and maintaining their Website', projComponent: <GCBC/>}
    const RTChat = {name: 'Real Time Chat', img: 'ChatWebsite2.png', description: '', projComponent: <RealTimeChat/>}
    const filler = {name: 'Testing', img: 'tree3.png', description: ''}
    const projectList = [projectBD, RTChat, fitnessApp, GCBCproj, filler, filler, filler, filler, ]

    return(
        <>
        <div className='all-content'>
        <Navbar isVisible={scrollUp}/>
        <div className='main-content'>
        <h1 style={{alignSelf:'center'}}>Projects</h1>
        <div className='projectspage-container '>
            {projectList.map((projectObject)=>(
                <>
                <div className='projectspage-box' onClick={()=>setProjSelected(projectObject)}>
                    <div className='projectspage-box-name-container'>
                        <h2 className='projectspage-box-name'>{projectObject.name}</h2>
                    </div>
                    <img className='projectspage-box-image' src={projectObject.img} />
                </div>
                
                </>
            ))}
        </div>

        {projSelected && (
            <>
                <ProjectInstance proj={projSelected} setProj={setProjSelected}/>
            </>
        )}
        </div>
        <Footer/>
        </div>
        </>
    )
}; export default ProjectsPage