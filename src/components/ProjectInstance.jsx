import '../styles/ProjectInstance.css'

const ProjectInstance = ({proj, setProj}) => {
    return (
        <div className='project-instance'>
            <div className='project-instance-box'>
                <img className='project-instance-x-button' src='x-button.png' onClick={()=>{setProj(null)}}/>
                {proj.name}
            </div>
        </div>
    )
}; export default ProjectInstance