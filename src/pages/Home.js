import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import './Home.css'
import Navbar from '../components/Navbar'

const Home = () => {
    const history = useHistory()
    const routeToSearchPage = () => history.push('/searchpage');

    return (
        <div className="home">
            <Navbar />
            <video src="/assets/bg-video.mp4" autoPlay loop muted></video>
            <div className="home-content">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for? Plan your memorable travel itinerary with us!</p>
                <Button style={{backgroundColor: "#ce4846"}} variant="contained" onClick={routeToSearchPage}>Let's Start</Button>
            </div>
        </div>
    )
}

export default Home
