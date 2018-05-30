import * as Actions from "../actions";

const initialState = {
    selectedPoint: {},
    activeMarker: {},
    showingInfoWindow: false
}

export const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.MAP_CLICK:
            return {
                ...state, 
                activeMarker: action.payload.activeMarker,
                showingInfoWindow: action.payload.showingInfoWindow
                };
        case Actions.MARKER_CLICK: 
            return {
                ...state, 
                selectedPoint: action.payload.selectedPoint,
                activeMarker: action.payload.selectedPoint,
                showingInfoWindow: action.payload.showingInfoWindow
                };
        default: 
            return state;
    }
}