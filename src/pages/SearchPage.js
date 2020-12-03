import { Badge, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Axios from "axios";
import "./SearchPage.css";
import { useHistory } from "react-router-dom";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import ActivityCard from "../components/ActivityCard";

const API_ACCESS_KEY = "9717d5a7bb89147bf20c2d2ebbd33d76";
const useStyles = makeStyles((theme) => ({
  largeIcon: {
    "& svg": {
      fontSize: 30,
    },
  },
}));
const SearchHeader = () => {
  const [input, setInput] = useState("");
  const [activityLists, setActivityLists] = useState([]);
  const [invisible, setInvisible] = useState(true);
  const [toursActive, setToursActive] = useState(true);
  const [interestsActive, setInterestsActive] = useState(false);
  const [safeActive, setSafeActive] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const routeToHome = () => history.push("/");
  const routeToTravelboard = () => history.push("/mytravelboard");

  let tourIsActive = toursActive ? "active" : "";
  let interestIsActive = interestsActive ? "active" : "";
  let safeIsActive = safeActive ? "active" : "";

  const toursAndActivities = () => {
    setToursActive(true);
    setInterestsActive(false);
    setSafeActive(false);
  };

  const pointsOfInterest = () => {
    setToursActive(false);
    setInterestsActive(true);
    setSafeActive(false);
  };

  const safePlaces = () => {
    setToursActive(false);
    setInterestsActive(false);
    setSafeActive(true);
  };

  const fetchGeocodeAndActivityList = async () => {
    try {
      const response = await Axios.get(
        `http://api.positionstack.com/v1/forward?access_key=${API_ACCESS_KEY}&query=${input}`
      );
      console.log(response.data.data);
      const geoArr = response.data.data;
      console.log(geoArr[0]);

      const cred = {
        clientId: "qV54lPA6hBxejskCSg0BTedeLeOgFAsL",
        clientSecret: "8FjjGLeQCzbh15Lt",
      };

      const tokenResp = await Axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        `grant_type=client_credentials&client_id=${cred.clientId}&client_secret=${cred.clientSecret}`
      );

      console.log({ tokenResp });

      const actListResp = await Axios.get(
        `https://test.api.amadeus.com/v1/shopping/activities?latitude=${geoArr[0].latitude}&longitude=${geoArr[0].longitude}&radius=20`,
        {
          headers: {
            Authorization:
              tokenResp.data.token_type + " " + tokenResp.data.access_token,
          },
        }
      );
      console.log({ actListResp });
      setActivityLists(actListResp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchHandler = (event) => {
    event.preventDefault();

    fetchGeocodeAndActivityList();
  };

  return (
    <div>
      <div className="navbar">
        <h2 onClick={routeToHome}>
          Explore<small>.co</small>
        </h2>

        <IconButton
          color="primary"
          aria-label="add to board"
          className={classes.largeIcon}
          onClick={routeToTravelboard}
        >
          <Badge color="secondary" variant="dot" invisible={invisible}>
            <CardTravelIcon />
          </Badge>
        </IconButton>
      </div>
      <div className="search-header">
        <div className="searchpage-content">
          <h1>Create Your TravelBoard Here</h1>
          <p>
            Search your destination by city name & discover the available tours
            and activities in the region
          </p>
          <form className="search-bar" onSubmit={onSearchHandler}>
            <input
              type="text"
              placeholder="eg.Bali"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
        </div>
      </div>
      {activityLists.length > 0 && (
        <div className="ResultWrapper">
          <div className="categoryMenu nav-menu">
            <div className="menu" onClick={toursAndActivities}>
              <h4 className={tourIsActive}>Tours & Activities</h4>
            </div>
            <div className="menu" onClick={pointsOfInterest}>
              <h4 className={interestIsActive}>Points of Interest</h4>
            </div>
            <div className="menu" onClick={safePlaces}>
              <h4 className={safeIsActive}>Safe Places</h4>
            </div>
          </div>
          {activityLists.length > 0 &&
            toursActive &&
            activityLists.map((list) => (
              <ActivityCard
                key={list.id}
                actList={list}
                setInvisible={setInvisible}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchHeader;
