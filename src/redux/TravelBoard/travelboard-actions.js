import * as actionTypes from "./travelboard-types";

export const getActivityLists = (actLists) => {
  return {
    type: actionTypes.ACTIVITY_LISTS,
    payload: actLists,
  };
};

export const getPointsOfInterest = (poiLists) => {
  return {
    type: actionTypes.POINTS_OF_INTEREST,
    payload: poiLists,
  };
};

export const addToBoard = (act) => {
  return {
    type: actionTypes.ADD_TO_BOARD,
    payload: act,
  };
};

export const removeFromBoard = (actId) => {
  return {
    type: actionTypes.REMOVE_FROM_BOARD,
    payload: actId,
  };
};
