import { Fab } from "@material-ui/core";
import React, { useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import "./SearchPage.css";
import { useHistory } from "react-router-dom";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import ActivityCard from "../components/ActivityCard";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const API_ACCESS_KEY = "9717d5a7bb89147bf20c2d2ebbd33d76";
const SearchHeader = () => {
  const [input, setInput] = useState("");
  const [activityLists, setActivityLists] = useState([]);

  const classes = useStyles();
  const history = useHistory();
  const routeToHome = () => history.push("/");

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
      <div className="search-header">
        <div className="navbar">
          <h2 onClick={routeToHome}>
            Explore<small>.co</small>
          </h2>
          <Fab variant="extended" color="primary">
            <DeveloperBoardIcon className={classes.extendedIcon} />
            My TravelBoard
          </Fab>
        </div>
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
      <div className="ResultWrapper">
        {activityLists.length > 0 &&
          activityLists.map((list) => (
            <ActivityCard key={list.id} actList={list} city={input} />
          ))}
      </div>
    </div>
  );
};

export default SearchHeader;
