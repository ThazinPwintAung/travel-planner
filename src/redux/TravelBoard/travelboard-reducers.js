import * as actionTypes from "./travelboard-types";

const INITIAL_STATE = {
  activities: [],
  pointsOfInterests: [],
  board: [],
};

const travelboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ACTIVITY_LISTS:
      return {
        ...state,
        activities: action.payload,
      };
    case actionTypes.POINTS_OF_INTEREST:
      return {
        ...state,
        pointsOfInterests: action.payload,
      };
    case actionTypes.ADD_TO_BOARD:
      const inBoard = state.board.find((act) =>
        act.id === action.payload.id ? true : false
      );
      return {
        ...state,
        board: inBoard ? [...state.board] : [...state.board, action.payload],
      };
    case actionTypes.REMOVE_FROM_BOARD:
      return {
        ...state,
        board: state.board.filter((act) => act.id !== action.payload),
      };
    default:
      return state;
  }
};

export default travelboardReducer;
