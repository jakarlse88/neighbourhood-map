import { combineReducers } from 'redux';
import { pointsReducer } from './pointsReducer';
import { mapReducer } from './mapReducer';
import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({
    points: pointsReducer,
    map: mapReducer,
    menu: menuReducer
});
