import '../styles/ProjectsPage.css'
import ProjectInstance from './ProjectInstance';

const ProjectsPage = ({ projSelected, setProjSelected }) => {
    const projectBD = {name:'projectBD', img:'projectBD.png', banner_img:'projectBD.png', description:'Empower the voice of Bangladesh Hindus against Tyranny'}
    const fitnessApp = {name:'Fitness Interval Timer', img:'IntervalTimer.png', banner_img:'IntervalTimer4.png', description:'Prototype for an interval timer Fitness App'}
    const GCBC = {name:'GCBC', img:'GCBC_projectspage.avif', banner_img:'GCBC.png', description:'Supporting a Local Church and maintaining their Website'}
    const filler = {name: 'Testing', img: 'tree3.png', description: ''}
    const projectList = [projectBD, fitnessApp, GCBC, filler, filler, filler, filler, ]

    return(
        <>
        <div className='projectspage-container '>
            {projectList.map((projectObject)=>(
                <>
                <div className='projectspage-box' onClick={()=>setProjSelected(projectObject)}>
                    <div className='projectspage-box-name-container'>
                        <h2 className='projectspage-box-name'>{projectObject.name}</h2>
                    </div>
                    <img className='projectspage-box-image' src={projectObject.img} />
                </div>
                
                </>
            ))}
        </div>

        {projSelected && (
            <>
                <ProjectInstance proj={projSelected} setProj={setProjSelected}/>
            </>
        )}
        </>
    )
}; export default ProjectsPage