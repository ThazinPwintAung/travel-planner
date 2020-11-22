import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const history = useHistory();
    const routeTo = () => history.push("/");
    return (
        <div className="navbar">
            <h2 onClick={routeTo}>Explore.co</h2>
            <div className="nav-menu">
                <div className="menu">
                    <h4>Home</h4>
                </div>
                <div className="menu">
                    <h4>About</h4>
                </div>
                <div className="menu">
                    <h4>Contact</h4>
                </div>
            </div>
            <Button style={{backgroundColor: "#0E7DBF", color:"#ffff"}} variant="contained">Book a flight</Button>
        </div>
    )
}

export default Header
