import '../styles/ProjectContainer.css'

const ProjectContainer = ({proj, projSelected, setProjSelected}) => {
    return (
        <>
        <div className = 'project-container' onClick={()=>setProjSelected(proj)}>
            <div className='project-text-container'>
                <div className='project-text-box'>
                    <h2 className='project-text'>{proj.name}</h2>
                    <p className='project-text'>{proj.description}</p>
                </div>
            </div>
            <img className='project-image' src={proj.banner_img}/>
        </div>
        </>
    )
}; export default ProjectContainer