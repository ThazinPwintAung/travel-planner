import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <video src="/assets/bg-video.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
        </div>
    )
}

export default Home
