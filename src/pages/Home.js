import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import './Home.css'
import Navbar from '../components/Navbar'
import Axios from 'axios';

const API_ACCESS_KEY = '9717d5a7bb89147bf20c2d2ebbd33d76';
const API_KEY = 'qV54lPA6hBxejskCSg0BTedeLeOgFAsL';
const API_SECRET = '8FjjGLeQCzbh15Lt';

const Home = () => {
    const history = useHistory()
    const routeToSearchPage = () => history.push('/searchpage');

    const fetchActivities = () => {
        var Amadeus = require("amadeus");
        var amadeus = new Amadeus({
            clientId: API_KEY,
            clientSecret: API_SECRET
        });

        // Returns activities for a location in Barcelona based on geolocation coordinates
        amadeus.shopping.activities.get({
            latitude: 41.397158,
            longitude: 2.160873
        }).then(response => {
            console.log(response.result.data);
        }).catch(response => {
            console.error(response);
        });
    }

    const fetchLatLngFromInput = () => {
        Axios.get(`http://api.positionstack.com/v1/forward?access_key=${API_ACCESS_KEY}&query='1600 Pennsylvania Ave NW, Washington DC'`)
        .then(response => {
            console.log(response.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

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
