import * as Actions from "../actions";
import escapeRegExp from 'escape-string-regexp';

const initialState = {
    allPoints: [
        {
            name: "Moss Taekwondo Club",
            position: { lat: 59.420662, lng: 10.673362 }
        },
        {
            name: "Bergen Vest Taekwondo Club",
            position: { lat: 60.369972, lng: 5.354637 }
        },
        {
            name: "Hamar Taekwondo Club",
            position: { lat: 60.789391, lng: 11.091559 }
        },
        {
            name: "Lyngby Taekwondo Club", 
            position: { lat: 55.790512, lng: 12.459880 }
        },
        {
            name: "Ringerike Taekwondo Club",
            position: { lat: 60.185631, lng: 10.255700 }
        },
        {
            name: "Kunja Taekwondo Club Nord-Odal",
            position: { lat: 60.387887, lng: 11.538254 }
        },
        {
            name: "Sunnfjord Taekwondo Club",
            position: { lat: 61.448744, lng: 5.837553 }
        },
        {
            name: "Lillesand Taekwondo Club",
            position: { lat: 58.245053, lng: 8.367139 }
        },
        {
            name: "Oppsal Taekwondo Club",
            position: { lat: 59.897855, lng: 10.842888 }
        },
        {
            name: "Islev Taekwondo Club",
            position: { lat: 55.705133, lng: 12.443619 }
        },
        {
            name: "Ålesund WTF Taekwondo Club",
            position: { lat: 62.438123, lng: 6.352422 }
        },
        {
            name: "Nordfjord Taekwondo Club",
            position: { lat: 61.904683, lng: 5.993231}
        },
        {
            name: "Evje Taekwondo Club",
            position: { lat: 58.567734, lng: 7.768607 }
        },
        {
            name: "Nittedal Taekwondo Club",
            position: { lat: 60.049622, lng: 10.880946 }
        },
        {
            name: "Bergstaden Taekwondo Club",
            position: { lat: 59.676416, lng: 9.648504 }
        },
        {
            name: "Solør Taekwondo Club",
            position: { lat: 60.610394, lng: 12.019432 }
        },
        {
            name: "Sædalen Taekwondo Club",
            position: { lat: 60.336649, lng: 5.372806}
        },
        {
            name: "OSI Taekwondo",
            position: { lat: 59.945877, lng: 10.724432 }
        },
        {
            name: "Larvik Taekwondo Club",
            position: { lat: 59.012524, lng: 10.033635 }
        },
        {
            name: "Elverum Taekwondo Club",
            position: { lat: 60.878332, lng: 11.576914 }
        },
        {
            name: "Hadeland Folk High School",
            position: { lat: 60.418636, lng: 10.499927 }
        },
        {
            name: "Florø Taekwondo Club",
            position: { lat: 61.598205, lng: 5.020690 }
        },
        {
            name: "Steinkjer Taekwondo Club",
            position: { lat: 64.031020, lng: 11.484246 }
        },
        {
            name: "Ski Taekwondo Club",
            position: { lat: 59.713336, lng: 10.845989 }
        },
        {
            name: "Nesodden IF Taekwondo",
            position: { lat: 59.790926, lng: 10.689649 }
        },
        {
            name: "Kvernbit Taekwondo",
            position: { lat: 60.550492, lng: 5.213164 }
        },
        {
            name: "Osterøy Taekwondo Club",
            position: { lat: 60.490623, lng: 5.669035 }
        },
        {
            name: "Notodden Taekwondo Club",
            position: { lat: 59.556720, lng: 9.258654 }
        },
        {
            name: "Centrum Taekwondo Club",
            position: { lat: 60.348961, lng: 5.361587 }
        },
        {
            name: "Evanger Taekwondo Club",
            position: { lat: 60.647200, lng: 6.112179 }
        },
        {
            name: "Taekwondo Rot-Weiß Lessenich e.V.",
            position: { lat: 50.720098, lng: 7.050417 }
        },
        {
            name: "Yong Do Kwan Taekwondo",
            position: { lat: 57.463670, lng: 9.993759 }
        }
    ],
    showingPoints: [
        {
            name: "Moss Taekwondo Club",
            position: { lat: 59.420662, lng: 10.673362 }
        },
        {
            name: "Bergen Vest Taekwondo Club",
            position: { lat: 60.369972, lng: 5.354637 }
        },
        {
            name: "Hamar Taekwondo Club",
            position: { lat: 60.789391, lng: 11.091559 }
        },
        {
            name: "Lyngby Taekwondo Club", 
            position: { lat: 55.790512, lng: 12.459880 }
        },
        {
            name: "Ringerike Taekwondo Club",
            position: { lat: 60.185631, lng: 10.255700 }
        },
        {
            name: "Kunja Taekwondo Club Nord-Odal",
            position: { lat: 60.387887, lng: 11.538254 }
        },
        {
            name: "Sunnfjord Taekwondo Club",
            position: { lat: 61.448744, lng: 5.837553 }
        },
        {
            name: "Lillesand Taekwondo Club",
            position: { lat: 58.245053, lng: 8.367139 }
        },
        {
            name: "Oppsal Taekwondo Club",
            position: { lat: 59.897855, lng: 10.842888 }
        },
        {
            name: "Islev Taekwondo Club",
            position: { lat: 55.705133, lng: 12.443619 }
        },
        {
            name: "Ålesund WTF Taekwondo Club",
            position: { lat: 62.438123, lng: 6.352422 }
        },
        {
            name: "Nordfjord Taekwondo Club",
            position: { lat: 61.904683, lng: 5.993231}
        },
        {
            name: "Evje Taekwondo Club",
            position: { lat: 58.567734, lng: 7.768607 }
        },
        {
            name: "Nittedal Taekwondo Club",
            position: { lat: 60.049622, lng: 10.880946 }
        },
        {
            name: "Bergstaden Taekwondo Club",
            position: { lat: 59.676416, lng: 9.648504 }
        },
        {
            name: "Solør Taekwondo Club",
            position: { lat: 60.610394, lng: 12.019432 }
        },
        {
            name: "Sædalen Taekwondo Club",
            position: { lat: 60.336649, lng: 5.372806}
        },
        {
            name: "OSI Taekwondo",
            position: { lat: 59.945877, lng: 10.724432 }
        },
        {
            name: "Larvik Taekwondo Club",
            position: { lat: 59.012524, lng: 10.033635 }
        },
        {
            name: "Elverum Taekwondo Club",
            position: { lat: 60.878332, lng: 11.576914 }
        },
        {
            name: "Hadeland Folk High School",
            position: { lat: 60.418636, lng: 10.499927 }
        },
        {
            name: "Florø Taekwondo Club",
            position: { lat: 61.598205, lng: 5.020690 }
        },
        {
            name: "Steinkjer Taekwondo Club",
            position: { lat: 64.031020, lng: 11.484246 }
        },
        {
            name: "Ski Taekwondo Club",
            position: { lat: 59.713336, lng: 10.845989 }
        },
        {
            name: "Nesodden IF Taekwondo",
            position: { lat: 59.790926, lng: 10.689649 }
        },
        {
            name: "Kvernbit Taekwondo",
            position: { lat: 60.550492, lng: 5.213164 }
        },
        {
            name: "Osterøy Taekwondo Club",
            position: { lat: 60.490623, lng: 5.669035 }
        },
        {
            name: "Notodden Taekwondo Club",
            position: { lat: 59.556720, lng: 9.258654 }
        },
        {
            name: "Centrum Taekwondo Club",
            position: { lat: 60.348961, lng: 5.361587 }
        },
        {
            name: "Evanger Taekwondo Club",
            position: { lat: 60.647200, lng: 6.112179 }
        },
        {
            name: "Taekwondo Rot-Weiß Lessenich e.V.",
            position: { lat: 50.720098, lng: 7.050417 }
        },
        {
            name: "Yong Do Kwan Taekwondo",
            position: { lat: 57.463670, lng: 9.993759 }
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
