import React from "react";
import { connect } from "react-redux";
import ActivityCard from "../components/ActivityCard";

const TravelBoard = ({ travelBoard }) => {
  return (
    <div className="TravelBoard">
      {travelBoard.map((list) => (
        <ActivityCard key={list.id} actList={list} />
      ))}
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
