import '../styles/ProjectsPage.css'

const ProjectsPage = () => {
    const projectBD = {name: 'projectBD', img: 'projectBD.png'}
    const fitnessApp = {name: 'Fitness Interval Timer', img: 'IntervalTimer.png'}
    const GCBC = {name: 'GCBC', img: 'GCBC_projectspage.avif'}
    const filler = {name: 'Testing', img: 'tree3.png'}
    const projectList = [projectBD, fitnessApp, GCBC, filler, filler, filler, filler,]
    return(
        <>
        
        <div className='projectspage-container '>
            {projectList.map((projectObject)=>(
                <>
                <div className='projectspage-box'>
                    <div className='projectspage-box-name-container'>
                        <h2 className='projectspage-box-name'>{projectObject.name}</h2>
                    </div>
                    <img className='projectspage-box-image' src={projectObject.img} />
                </div>
                
                </>
            ))}
        </div>
        </>
    )
}; export default ProjectsPage