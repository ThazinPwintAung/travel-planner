import * as actionTypes from './travelboard-types';

const INITIAL_STATE = {
    activities: [], //{id,name,desc,price,img}
    board: [], //{id,name,desc,price,img}
    currentActivity: null,
};

const travelboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_TRAVELBOARD:
            return {}
        case actionTypes.REMOVE_FROM_TRAVELBOARD:
            return {}
        case actionTypes.LOAD_CURRENT_ACTIVITY:
            return {}
        default:
            return state
    }
};

export default travelboardReducer;

