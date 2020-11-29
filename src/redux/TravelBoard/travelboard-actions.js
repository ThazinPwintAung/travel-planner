import * as actionTypes from './travelboard-types';

export const fetchActivitiesRequest = () => {
    return {
        type: actionTypes.FETCH_ACTIVITIES_REQUEST,

    };
};

export const fetchActivitiesSuccess = (activities) => {
    return {
        type: actionTypes.FETCH_ACTIVITIES_SUCCESS,
        payload: activities,
    };
};

export const fetchActivitiesFailure = error => {
    return {
        type: actionTypes.FETCH_ACTIVITIES_FAILURE,
        payload: error,
    };
};

export const fetchActivities = ({latitude, longitude}) => {
    return (dispatch) => {
        dispatch(fetchActivitiesRequest)
        var Amadeus = require("amadeus");
        var amadeus = new Amadeus({
            clientId: 'qV54lPA6hBxejskCSg0BTedeLeOgFAsL',
            clientSecret: '8FjjGLeQCzbh15Lt',
        });

        amadeus.shopping.activities.get({
            latitude: latitude,
            longitude: longitude,
        }).then(response => {
            console.log(response.result.data);
            const activities = response.result.data;
            dispatch(fetchActivitiesSuccess(activities));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchActivitiesFailure(errorMsg));
        });
    }
}