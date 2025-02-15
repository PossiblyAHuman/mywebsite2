import '../styles/Interests.css'
import InterestComputer from './interestSections/InterestComputer';
import InterestGaming from './interestSections/InterestGaming';
import InterestArt from './interestSections/InterestArt';
import InterestFinance from './interestSections/InterestFinance';

const Interests = () => {
    return (
        <>
            <h1 style={{backgroundColor:'orange'}}>WORK IN PROGRESS</h1>
            <div className='interests'>
                <InterestComputer/>
                <InterestGaming/>
                <InterestFinance/>
                <InterestArt/>
            </div>
        </>
    )
}; export default Interests