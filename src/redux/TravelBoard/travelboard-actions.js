import * as actionTypes from "./travelboard-types";

export const addToBoard = (act) => {
  return {
    type: actionTypes.ADD_TO_BOARD,
    payload: act,
  };
};

export const removeFromBoard = (cardId) => {
  return {
    type: actionTypes.REMOVE_FROM_BOARD,
    payload: cardId,
  };
};
