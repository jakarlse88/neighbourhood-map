import * as Actions from "../actions";

const initialState = {
    selectedPoint: {},
    activeMarker: {},
    showingInfoWindow: false,
    markers: []
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
        case Actions.ADD_MARKER:
            return {
                ...state,
                markers: [...state.markers, action.payload.marker]
            };
        case Actions.CLEAR_MARKERS:
            return {
                ...state,
                markers: []
            };
        default: 
            return state;
    }
}