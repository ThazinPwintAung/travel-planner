import { Fab } from '@material-ui/core';
import React, { useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import './SearchHeader.css';
import { useHistory } from 'react-router-dom';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import {connect} from 'react-redux';
import {fetchActivities} from '../redux/TravelBoard/travelboard-actions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const API_ACCESS_KEY = '9717d5a7bb89147bf20c2d2ebbd33d76';
const SearchHeader = ({fetchActivities}) => {
    const [input, setInput] = useState("");

    const classes = useStyles();
    const history = useHistory();
    const routeToHome = () => history.push("/");

    const fetchGeocode = () => {
        Axios.get(`http://api.positionstack.com/v1/forward?access_key=${API_ACCESS_KEY}&query=${input}`)
            .then(response => {
                console.log(response.data.data);
                const geoArr = response.data.data;
                console.log(geoArr[0]);
                fetchActivities(geoArr[0]);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onSearchHandler = (event) => {
        event.preventDefault();

        fetchGeocode();
    };

    return (
        <div className="search-header">
            <div className="navbar">
                <h2 onClick={routeToHome}>Explore<small>.co</small></h2>
                <Fab variant="extended" color="primary" >
                    <DeveloperBoardIcon className={classes.extendedIcon}/>
                    My TravelBoard
                </Fab>
            </div>
            <div className="searchpage-content">
                <h1>Create Your TravelBoard Here</h1>
                <p>Search your destination by city name & discover the available tours and activities in the region</p>
                <form className="search-bar" onSubmit={onSearchHandler}>
                    <input type="text" placeholder="eg.Bali" 
                    value={input} onChange={event => setInput(event.target.value)} />
                </form>
            </div>   
        </div>
    )
}

const mapStateToProps = state => {
    return {
        activityLists: state.activity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchActivities: () => dispatch(fetchActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
