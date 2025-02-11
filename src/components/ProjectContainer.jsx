import '../styles/ProjectContainer.css'
const ProjectContainer = ({name, description, image}) => {
    return (
        <>
        <div className = 'project-container'>
            <div className='project-text-container'>
                <div className='project-text-box'>
                    <h2 className='project-text'>{name}</h2>
                    <p className='project-text'>{description}</p>
                </div>
            </div>
            <img className='project-image' src={image}/>
        </div>
        </>
    )
}; export default ProjectContainer