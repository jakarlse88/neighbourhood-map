import * as Actions from '../actions';

const initialState = {
    isFetching: false,
    didErr: false,
    data: {}
}

export const dataReducer = (state= initialState, action) => {
    switch (action.type) {
        case Actions.DATA_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            };

        case Actions.DATA_FETCH_DID_ERR:
            return {
                ...state,
                didErr: action.payload.didErr 
            };

        case Actions.DATA_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            };

        default:
            return state;
    }
}