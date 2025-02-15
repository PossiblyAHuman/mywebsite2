import '../styles/AboutMe2.css'

const AboutMe2 = () => {
    return(
        <>
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
        </>
    )
}; export default AboutMe2