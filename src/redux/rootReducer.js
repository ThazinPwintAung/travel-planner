import {combineReducers} from 'redux';
import travelboard_reducers from './TravelBoard/travelboard-reducers';

const rootReducer = combineReducers({
    activity: travelboard_reducers
});

export default rootReducer;