import * as Actions from "../actions";
import escapeRegExp from 'escape-string-regexp';

const initialState = {
    allPoints: [
        {
            name: "Moss Taekwondo Club",
            position: { lat: 59.420662, lng: 10.673362 }
        },
        {
            name: "Moss Karate Club",
            position: { lat: 59.431586, lng: 10.649614 }
        },
        {
            name: "MUDO Gym & Martial Arts Moss",
            position: { lat: 59.436959, lng: 10.662353 }
        },
        {
            name: "Dahnjun Taekwondo Klubb",
            position: { lat: 59.410793, lng: 10.678381 }
        },
        {
            name: "Goju Ryu Karate Rygge",
            position: { lat: 59.407491, lng: 10.696795 }
        },
        {
            name: "Moss National Taekwon-do Club",
            position: { lat: 59.439116, lng: 10.667983 }
        }
    ],
    showingPoints: [
        {
            name: "Moss Taekwondo Club",
            position: { lat: 59.420662, lng: 10.673362 },
            marker: {}
        },
        {
            name: "Moss Karate Club",
            position: { lat: 59.431586, lng: 10.649614 },
            marker: {}
        },
        {
            name: "MUDO Gym & Martial Arts Moss",
            position: { lat: 59.436959, lng: 10.662353 },
            marker: {}
        },
        {
            name: "Dahnjun Taekwondo Klubb",
            position: { lat: 59.410793, lng: 10.678381 },
            marker: {}
        },
        {
            name: "Goju Ryu Karate Rygge",
            position: { lat: 59.407491, lng: 10.696795 },
            marker: {}
        },
        {
            name: "Moss National Taekwon-do Club",
            position: { lat: 59.439116, lng: 10.667983 },
            marker: {}
        }
    ],
    filter: '',
    selectedPoint: {},
    activeMarker: {},
    showingInfoWindow: false,
    markers: [],
    infoWindow: {},
    showMenu: true
}

export const stateReducer = (state = initialState, action) => {
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
            const { 
                showMenu 
            } = state;
        
            return {
                ...state,
                showMenu: showMenu ? false : true
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
