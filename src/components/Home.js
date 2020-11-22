import { Input } from '@material-ui/core'
import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <video src="/assets/bg-video.mp4" autoPlay loop muted></video>
            <div className="home-content">
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for? Start searching for your destinations.</p>
                <form className="search-form" noValidate autoComplete="off">
                    <Input placeholder="eg. Myanmar" inputProps={{ 'aria-label': 'description' }} className="input" />
                </form>
            </div>
        </div>
    )
}

export default Home
