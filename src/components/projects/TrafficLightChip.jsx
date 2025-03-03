import './TrafficLightChip.css'

const TrafficLightChip = () => {
    return(
        <div className='tlc'>
            <img className='tlc-img' src='tlc2.png'/>
            <p>4-way Traffic Light Controller with an optional input for a traffic sensor. This was designed with a team of 4.
            </p>
            <img className='tlc-img' src='tlc1.png'/>
            <p>I utilized Cadence Virtuoso to create the layout for one of the two finite state machines as shown above</p>
            <img className='tlc-img' src='tlc3.png'/>
        </div>
    )
}; export default TrafficLightChip