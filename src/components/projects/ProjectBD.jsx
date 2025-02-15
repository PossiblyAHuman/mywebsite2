import './ProjectBD.css'

const ProjectBD = () => {
    return(
        <div className='projectBD'>
            <img className='projectBD-img' src='projectBD.png'></img>
            <p>A real time platform to see the different attacks on Hindus that are happening in the country of Bangladesh as well as ways to support them through donations.</p>
            <p>I received the reports of different attacks against Hindus, and created the backend logic to handle the reports.</p>
            <p>I used a Google geocode API, to obtain the coordinates of user uploaded addresses, so they can be displayed on the map</p>
            <p>I used the Perspective API to analyze the different toxicity values of a given upload. These values include but are not limited to Insult, Incoherent, Spam, etc. We plan on using these values to create a basic machine learning model, to filter out malicious uploads </p>
        </div>
    )
}; export default ProjectBD;