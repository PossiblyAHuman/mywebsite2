import '../styles/ProjectInstance.css'

const ProjectInstance = ({proj, setProj}) => {
    return (
        <div className='project-instance'>
            <div className='project-instance-box'>
                <img className='project-instance-x-button' src='x-button2.png' onClick={()=>{setProj(null)}}/>
                <div className='project-instance-box-content'>
                    <h1>{proj.name}</h1>
                    {proj.projComponent}

                </div>
                
            </div>
        </div>
    )
}; export default ProjectInstance