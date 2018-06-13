import * as Actions from "../actions";
import escapeRegExp from 'escape-string-regexp';

const initialState = {
    activeMarker: {},
    allPoints: [],
    filter: '',
    infoWindow: {},
    markers: [],
    selectedPoint: {},
    showingInfoWindow: false,
    showingPoints: [],
    showMenu: true
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

        case Actions.ADD_MARKERS:
            return {
                ...state,
                markers: action.payload.markers
            };

        case Actions.CLEAR_MARKERS:
            return {
                ...state,
                markers: []
            };

        case Actions.UPDATE_FILTER:
            return updateFilter(action, state);

        case Actions.SET_INFOWINDOW:
            return {
                ...state,
                infoWindow: action.payload.infoWindow
            };

        case Actions.TOGGLE_MENU:
            return toggleMenu(state);

        case Actions.POPULATE_ALLPOINTS: 
            return {
                ...state,
                allPoints: action.payload.allPoints,
                showingPoints: action.payload.allPoints
            };

        default:
            return state;
    }
}

const updateFilter = (action, state) => {
    const { filter, points } = action.payload;
    const match = new RegExp(escapeRegExp(filter), 'i');
    return {
        ...state,
        filter: filter,
        showingPoints: (points.length < 1 && filter !== '') ? points
            : points.filter(point => match.test(point.name)) 
    };
}

const toggleMenu = (state) => {
    const { showMenu } = state;

    return {
        ...state,
        showMenu: showMenu === true ? false : true
    };
};
