export const UPDATE_FILTER = 'UPDATE_FILTER';
export const MAP_CLICK = 'MAP_CLICK';
export const MARKER_CLICK = 'MARKER_CLICK';
export const HIDE_MENU = 'HIDE_MENU';
export const SHOW_MENU = 'SHOW_MENU';
export const ADD_MARKER = 'ADD_MARKER';
export const FILTER_POINTS = 'FILTER_POINTS';
export const CLEAR_MARKERS = 'CLEAR_MARKERS';

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

export const hideMenu = () => {
    return {
        type: HIDE_MENU,
        payload: {
            showMenu: false
        }
    }
} 

export const showMenu = () => {
    return {
        type: SHOW_MENU,
        payload: {
            showMenu: true
        }
    }
}

export const addMarker = marker => {
    return {
        type: ADD_MARKER,
        payload: {
            marker: marker
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
