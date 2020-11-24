import * as actionTypes from './travelboard-types';

export const addToTravelboard = (actID) => {
    return {
        type: actionTypes.ADD_TO_TRAVELBOARD,
        payload: {
            id: actID,
        },
    };
};

export const removeFromTravelboard = (actID) => {
    return {
        type: actionTypes.REMOVE_FROM_TRAVELBOARD,
        payload: {
            id: actID,
        },
    };
};

export const loadCurrentActivity = (activity) => {
    return {
        type: actionTypes.LOAD_CURRENT_ACTIVITY,
        payload: activity,
    };
};