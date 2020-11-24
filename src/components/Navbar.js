import React from 'react'
import { useHistory } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const history = useHistory();
    const routeToHome = () => history.push("/");
    return (
        <div className="navbar">
            <div className="logo">
                <h2 onClick={routeToHome}>Explore.co</h2>
            </div>
            <div className="nav-menu">
                <div className="menu">
                    <h4 onClick={routeToHome}>Home</h4>
                </div>
                <div className="menu">
                    <h4>About</h4>
                </div>
                <div className="menu">
                    <h4>Guide</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar
