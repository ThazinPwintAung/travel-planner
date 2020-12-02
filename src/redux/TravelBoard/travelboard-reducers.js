import * as actionTypes from "./travelboard-types";

const INITIAL_STATE = {
  board: [],
};

const travelboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BOARD:
      return {
        ...state,
        board: [...state.board, action.payload],
      };
    case actionTypes.REMOVE_FROM_BOARD:
      return {};
    default:
      return state;
  }
};

export default travelboardReducer;
