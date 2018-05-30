import * as Actions from "../actions";

const initialState = {
    showMenu: true,
    query: '',
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.HIDE_MENU:
            return { ...state, showMenu: action.payload.showMenu };
        case Actions.SHOW_MENU:
            return { ...state, showMenu: action.payload.showMenu };
        case Actions.UPDATE_QUERY: 
            return { ...state, query: action.payload.text };
        default:
            return state;
    }
}