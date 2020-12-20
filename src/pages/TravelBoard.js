import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import TravelBoardCard from "../components/TravelBoardCard";
import { Close } from "@material-ui/icons";
import "./TravelBoard.css";

const useStyles = makeStyles(() => ({
  largeIcon: {
    "& svg": {
      fontSize: 35,
    },
  },
}));

const TravelBoard = ({ travelBoard }) => {
  const classes = useStyles();
  const history = useHistory();
  const routeToHome = () => history.push("/");
  const routeToTravelboard = () => history.goBack();
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
          <Close />
        </IconButton>
      </div>
      <h3>The Activity Lists You've Recently Added To Your Board</h3>
      <div className="TravelBoard">
        {travelBoard.length > 0 ? (
          travelBoard.map((list) => (
            <TravelBoardCard key={list.id} actList={list} />
          ))
        ) : (
          <p className="text">You haven't added anything yet.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("TravelBoard: ", state.board.board);
  return {
    travelBoard: state.board.board,
  };
};

export default connect(mapStateToProps, null)(TravelBoard);
