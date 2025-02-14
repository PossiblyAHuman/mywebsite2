import '../styles/ContactMe.css'

const ContactMe = () => {
    return(
        <>
            <h1 style={{backgroundColor:'orange'}}>WORK IN PROGRESS</h1>
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
                        <button className='contact-form-button' onClick={()=>alert("work in progress")}>Submit</button>
                        
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}; export default ContactMe