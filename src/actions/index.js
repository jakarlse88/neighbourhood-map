export const UPDATE_FILTER = 'UPDATE_FILTER';
export const MAP_CLICK = 'MAP_CLICK';
export const MARKER_CLICK = 'MARKER_CLICK';
export const ADD_MARKERS = 'ADD_MARKERS';
export const CLEAR_MARKERS = 'CLEAR_MARKERS';
export const SET_INFOWINDOW = 'SET_INFOWINDOW';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const DATA_IS_FETCHING = 'DATA_IS_FETCHING';

export const updateFilter = (filter = null, points) => {
    return {
        type: UPDATE_FILTER,
        payload: {
            filter: filter,
            points: points
        }
    }
}

export const onMapClick = props => {
    return {
        type: MAP_CLICK,
        payload: {
            activeMarker: null,
            showingInfoWindow: false
        }
    }
}

export const onMarkerClick = (point, marker) => {
    return {
        type: MARKER_CLICK,
        payload: {
            selectedPoint: point,
            activeMarker: marker,
            showingInfoWindow: true
        }
    }
}

export const addMarkers = markers => {
    return {
        type: ADD_MARKERS,
        payload: {
            markers: markers
        }
    }
}

export const clearMarkers = () => {
    return {
        type: CLEAR_MARKERS,
        payload: {
            markers: []
        }
    }
}

export const setInfoWindow = infoWindow => {
    return {
        type: SET_INFOWINDOW,
        payload: {
            infoWindow: infoWindow
        }
    }
}

export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU
    }
}