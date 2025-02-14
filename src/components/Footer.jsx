import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div>
                <a href='https://www.linkedin.com/in/azhou7/' target='_blank'>
                    <img className='social-logo' src='linkedIn2.png'/>
                </a>
                <a href='https://github.com/PossiblyAHuman' target='_blank'>            
                    <img className='social-logo' src='github-logo-6532.png'/>
                </a>
                <a href='https://leetcode.com/u/AZ1337/' target='_blank'>
                    <img className='social-logo' src='leetcode.png'/>
                </a>
            </div>
            <p className='footer-text'>1(929)-363-8225 | New York | Andyzhou1700@gmail.com</p>
            <p className='footer-text'>© ANDY ZHOU 2025. ALL RIGHTS RESERVED</p>
        </footer>
    )
}; export default Footer