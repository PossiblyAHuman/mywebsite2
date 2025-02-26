import './ProjectBD.css'

const ProjectBD = () => {
    return(
        <div className='projectBD'>
            <h1>What is this project about?</h1>
            <p>There is a genocide going on in Bangladesh, we wish to help Bangladesh Hindus against their oppressors.</p>
            <h1>Our Mission</h1>
            <p>The first part of our goal is to collect data, to better inform Bangladesh Hindus and the outside world</p>
            <p>We then plan on creating widespread awareness of what is happening. I already wrote down our marketing plan to spread said awareness.</p>
            <p>The final part of our goal is to help and fight back against the hatred in Bangladesh. Specifics have not been finalized.</p>
            <h1>Frontend</h1>
            <p>Frontend not complete yet, but here is the homepage that I worked on, built fully with React. There are things that are subject to change.</p>
            <img className='projectBD-img' src='pbd_home1.png'></img>
            <p>I wanted a modern looking website, with a video to draw the user's attention. This temporary video will be replaced with a video of Bangladesh Hindus.</p>
            <img className='projectBD-img' src='pbd_home2.png'></img>
            <p>As you scroll down the homepage, you will se our mission statement. So that the user knows what this organization is about. Since this organization is small, we need this information front and center.</p>
            <img className='projectBD-img' src='pbd_home3.png'></img>
            <p>We then have some images, we will change these placeholder images with something related to the suffering of Bangladesh hindus</p>
            <img className='projectBD-img' src='pbd_home4.png'></img>
            <p>This footer isn't done yet</p>
            <h1>Backend</h1>
            <p>A real time platform to see the different attacks on Hindus that are happening in the country of Bangladesh as well as ways to support them through donations.</p>
            <h1>Upload Report of Hate</h1>
            <p>I received the reports of different attacks against Hindus, and created the backend logic to handle the reports.</p>
            <h2>Geocode</h2>
            <p>I used a Google geocode API, to obtain the coordinates of user uploaded addresses, so they can be displayed on the map</p>
            <h2>Spam</h2>
            <p>This project has a very high likelihood of being attacked. So we talked about security a lot.</p>
            <p>The Akismet API from wordpress is our first level of spam filter.</p>
            <p>I then used the Perspective API to analyze the different toxicity values of a given upload. These values include but are not limited to Insult, Incoherent, Spam, etc. 
                We plan on using these values to create a basic machine learning model, to filter out malicious uploads </p>
            <h2>AI Summary</h2>
            <p>I used Llama AI from Meta to read a source that the user uploads, and provide an AI summary for the source. This allows other users to learn what was reported, without having to click on sketchy links.</p>

            <h1>Display Reports of Hate</h1>
            <p>We are displaying the information I collected on an interactive map</p>
            <p>The map will be divided based on the Divisions and Districts of Bangladesh</p>
            <p>We will not display more specific addresses than Districts, even though it would've been easier. This is because I didn't want the victims to be doxxed and further attacked.</p>
            <p>The user will be able to see the number of attacks in each Division or District</p>
            <p>The user will be able to click on a specific District/Division and read both verified and user uploaded reports of attacks</p>
            <p>We will implement a filter system for the data</p>

            <h1>Security, Security, Security</h1>
            <p>Security will be one of the most important parts for this project</p>
            <p>Right now we have satisfactory spam filters for the user uploads</p>
            <p>We plan on using Google reCaptcha to further prevent spam</p>
            <p>We are discussing extensively about how to limit the damage from major attacks.</p>
            <p>
                Right now we have IP Rate Limiting and other basic security features to stop basic DoS attacks, but it's not perfect.
                Our basic Swiss Cheese Security Model will hopefully be enough for our organization while we are still small, and attackers have limited incentives to attack us.
                But we will have to look into more advanced security procedures if we do get attacked.
                Our server resources are also extremely limited, making us especially susceptible to basic DDoS attacks.
                Hopefully future donations will address this.
            </p>
            <p><b>We are a small team of engineers, standing up against a nation and their government. Security will be an ongoing discussion for the foreseeable future.</b></p>
        </div>
    )
}; export default ProjectBD;