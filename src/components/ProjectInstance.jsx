import '../styles/ProjectInstance.css'

const ProjectInstance = ({proj, setProj}) => {
    return (
        <div className='project-instance'>
            <div className='project-instance-box'>
                <img className='project-instance-x-button' src='x-button2.png' onClick={()=>{setProj(null)}}/>
                    <div className='project-instance-box-content'>
                    <h1>{proj.name}</h1>
                    <img className='project-instance-box-img' src={proj.img}></img>
                    <p className='project-instance-box-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue sodales aliquet. Cras ac mi finibus, sollicitudin lacus sit amet, ultricies quam. Cras nec dui venenatis, ultricies purus ut, volutpat neque.</p>
                    <img className='project-instance-box-img' src={proj.img}></img>
                    <p className='project-instance-box-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue sodales aliquet. Cras ac mi finibus, sollicitudin lacus sit amet, ultricies quam. Cras nec dui venenatis, ultricies purus ut, volutpat neque.</p>
                    <img className='project-instance-box-img' src={proj.img}></img>
                    <p className='project-instance-box-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue sodales aliquet. Cras ac mi finibus, sollicitudin lacus sit amet, ultricies quam. Cras nec dui venenatis, ultricies purus ut, volutpat neque.</p>
                    <img className='project-instance-box-img' src={proj.img}></img>
                    <p className='project-instance-box-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue sodales aliquet. Cras ac mi finibus, sollicitudin lacus sit amet, ultricies quam. Cras nec dui venenatis, ultricies purus ut, volutpat neque.</p>
                </div>
                
            </div>
        </div>
    )
}; export default ProjectInstance