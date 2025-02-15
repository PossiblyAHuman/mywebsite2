import './FitnessIntervalTimer.css'

const FitnessIntervalTimer = () => {
    return(        
        <div className="fitness">
            <img src='IntervalTimer.png'/>
            <p>This is an app that focuses on creating timers for workouts. You can create a basic timer with the number of sets and the duration of each set.</p>
            <img src='fitness1.png' className='fitness-img'/>
            <p>You can also create custom routines. They are a combination of multiple exercises.</p>
            <img src='fitness2.png' className='fitness-img'/>
            <p>Notice how when you start a routine, you are given an interface that is almost like a music player. This allows the user to skip certain exercies and/or repeat exercises as they see fit. I redid the frontend design for the routine player 3 times until I thought of the music player design.</p>
            <img src='fitness3.png' className='fitness-img'/>
            <p>This is the History of all the routines and exercises you have done. I was actually stuck on this section for a bit, since no matter how I redesigned the boxes, I didn't like the aesthetics. Then when I was looking at my phone call history, I noticed how it didn't use boxes but still implied separation. I took inspiration from that, and created separation through lines.</p>
            <img src='fitness4.png' className='fitness-img'/>
        </div>
    )
}; export default FitnessIntervalTimer;