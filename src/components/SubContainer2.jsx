import '../styles/SubContainer2.css'
const SubContainer2 = () => {
    return(
        <div className='subcontainer2'>
            <div className='section section-top'>
                <img className='section-image' src='eye.png'/>
                <div className='section-text left'>
                    <h1 className='section-text-header'>Attention to Detail</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum risus quis vehicula volutpat. Nam diam erat, scelerisque eget posuere porttitor, dapibus vulputate lorem.</p>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className='section'>
                <div className='section-text right'>
                    <h1 className='section-text-header'>Creativity</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum risus quis vehicula volutpat. Nam diam erat, scelerisque eget posuere porttitor, dapibus vulputate lorem.</p>
                </div>
                <img className='section-image' src='idea.png'/>
            </div>
            <div className="horizontal-line"></div>
            <div className='section section-bottom'>
                <img className='section-image' src='adaptability.png'/>
                <div className='section-text left'>
                    <h1 className='section-text-header'>Adaptability</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum risus quis vehicula volutpat. Nam diam erat, scelerisque eget posuere porttitor, dapibus vulputate lorem.</p>
                </div>
            </div>
        </div>
    )
}; export default SubContainer2