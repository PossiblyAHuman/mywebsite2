import './RealTimeChat.css'

const RealTimeChat = () => {
    return(
        <div className='rtchat'>
            <img className='rtchat-image' src='ChatWebsite.png'/>
            A chat website with real time messaging/file uploads, and video calling. The backend was designed almost entirely from scratch with the exception of the TCP socket itself.
            <h1>WebSocket</h1>
            <p>I built WebSocket fully from scratch by looking at the protocol. First I added a websocket endpoint and the corresponding function to my TCP handler, which upgraded the TCP socket and connection to a WebSocket one. 
                I then created my own WebSocket handler, which receives Websocket Frames and handles it based on the WebSocket protocol. Including reading the frame's header through bit manipulation, buffering, parsing, processing.
                After rebuilding the data, the handler handles the data based on the type of message. For example, it can send data to all users in the main chat, or it can send data to specific users in DM (direct message) or video call.</p>
            <h1>OAuth 2.0</h1>
            <p>OAuth through Spotify, allowing users to Login securely. And also they can send chat messages that included the current song they are listening to in Spotify.</p>
            <h1>Multipart HTTP Requests</h1>
            <p>This enabled Form Submissions and large file uploads. This allowed the user to send large videos and images to the chat. Multipart parsing was built by splitting the data into the many sections, based on the protocol. 
                And then rebuilding the data in an object that I created.</p>
            <h1>File upload authentication</h1>
            <p>Just looking at the extension was not enough to verify a file. So I checked the file signature and other checks on the file type. However, although these techniques are usually reliable, they are not perfect.
                A malicious actor can probably figure out a way around these protective measures if they are dedicated enough. Even some of the best file verification systems from the largest companies are frequently breached.</p>
            <h1>TCP Handler and Requests</h1>
            <p>Built my own Router Class. You can add endpoints to the Router Object, and the corresponding callback functions. 
                When you receive an HTTP request, it is passed into my Request Class to create a Request Object. 
                This Request Object is then passed into my Router Object which finds a matching endpoint,
                and then runs the callback function on the Request Object. You then return the corresponding HTTP Response. </p>
        </div>
    )
}; export default RealTimeChat