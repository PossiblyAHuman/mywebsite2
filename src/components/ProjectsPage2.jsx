import '../styles/ProjectsPage2.css'

const ProjectsPage2 = () => {
    const projectBD = {name:'projectBD', img:'projectBD.png', banner_img:'projectBD.png', description:'Empower the voice of Bangladesh Hindus against Tyranny'}
    const fitnessApp = {name:'Fitness Interval Timer', img:'IntervalTimer.png', banner_img:'IntervalTimer4.png', description:'Prototype for an interval timer Fitness App'}
    const GCBC = {name:'GCBC', img:'GCBC_projectspage.avif', banner_img:'GCBC.png', description:'Supporting a Local Church and maintaining their Website'}
    const filler = {name: 'Testing', img: 'tree3.png', description: ''}
    const projectList = [projectBD, fitnessApp, GCBC, filler, filler, filler, filler, ]
    return(
        <>
        <div className='proj2-container'>
            {projectList.map((projectObj)=>(
                <>
                <div className='proj2-card'>
                    <img className='proj2-card-img' src = {projectObj.img}/>
                </div>
                </>
            ))}
        </div>
        </>
    )
}; export default ProjectsPage2