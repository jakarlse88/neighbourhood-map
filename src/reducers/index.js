import { combineReducers } from 'redux';
import { mapReducer } from './mapReducer';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
    data: dataReducer,
    map: mapReducer
});
