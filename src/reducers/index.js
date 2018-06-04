import { combineReducers } from 'redux';
import { pointsReducer } from './pointsReducer';
import { mapReducer } from './mapReducer';

export const rootReducer = combineReducers({
    points: pointsReducer,
    map: mapReducer
});
