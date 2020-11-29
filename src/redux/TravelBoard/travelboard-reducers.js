import * as actionTypes from './travelboard-types';

const INITIAL_STATE = {
    loading: false,
    activities: [], //{id,name,desc,price,img}
    error: '',
};

const travelboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.FETCH_ACTIVITIES_REQUEST:
            return {
                loading: true
            }
        case actionTypes.FETCH_ACTIVITIES_SUCCESS:
            return {
                loading: false,
                activities: action.payload,
                error: ''
            }
        case actionTypes.FETCH_ACTIVITIES_FAILURE:
            return {
                loading: false,
                activities: [],
                error: action.payload
            }
        default:
            return state
    }
};

export default travelboardReducer;

