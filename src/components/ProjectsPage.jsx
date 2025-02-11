import '../styles/ProjectsPage.css'

const ProjectsPage = () => {
    const projectList = ['project1', 'project2', 'project3']
    return(
        <>
        
        <div className='project-container'>
            {projectList.map((projectName)=>(
                <>
                <div className='project-box'>
                    <h1 className='project-box-name'>{projectName}</h1>
                    <img className='project-box-image' src='tree3.png' />
                </div>
                
                </>
            ))}
        </div>
        </>
    )
}; export default ProjectsPage