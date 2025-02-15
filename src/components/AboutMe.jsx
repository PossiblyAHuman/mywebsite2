import '../styles/AboutMe.css'
import { useState } from 'react'

const AboutMe = () => {
    const [img, setImg] = useState('placeholder3.png')
    return(
        <>
        <h1 style={{backgroundColor:'orange'}}>WORK IN PROGRESS</h1>
        <div className='about-me'>
            <div className='about-me-textbox'>
                <h1>Hi, I'm Andy Zhou.</h1>
                <p>I'm a software engineer based in New York City</p>
                <p>Since 2017 I have been learning about technology, and solving complex technical problems. I have a solid understanding of web development, low level programming concepts, and computer hardware. 
                    I am excited to talk with you about these topics and maybe help you with your technical problems too!</p>
            </div>
            <img className='about-me-photo' src={img}/>
        </div>
        <div className='image-gallery-container'>
            <div className="about-me-horizontal-line"></div>
            <div className='about-me-image-gallery'>
                <img className='image-gallery-image' src='placeholder3.png' onClick={()=>setImg('placeholder3.png')}/>
                <img className='image-gallery-image' src='placeholder.png' onClick={()=>setImg('placeholder.png')}/>
                <img className='image-gallery-image' src='tree3.png' onClick={()=>setImg('tree3.png')}/>
                <img className='image-gallery-image' src='logo.png' onClick={()=>setImg('logo.png')}/>
            </div>
        </div>
        </>
    )
}; export default AboutMe