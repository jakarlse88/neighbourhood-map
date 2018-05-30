export const UPDATE_QUERY = 'UPDATE_QUERY';
export const MAP_CLICK = 'MAP_CLICK';
export const MARKER_CLICK = 'MARKER_CLICK';
export const HIDE_MENU = 'HIDE_MENU';
export const SHOW_MENU = 'SHOW_MENU';

export const updateQuery = (query = null) => {
    console.log(query);

    return {
        type: UPDATE_QUERY,
        payload: {
            text: query
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