export const UPDATE_FILTER = 'UPDATE_FILTER';
export const MAP_CLICK = 'MAP_CLICK';
export const MARKER_CLICK = 'MARKER_CLICK';
export const ADD_MARKERS = 'ADD_MARKERS';
export const CLEAR_MARKERS = 'CLEAR_MARKERS';
export const SET_INFOWINDOW = 'SET_INFOWINDOW';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const DATA_IS_FETCHING = 'DATA_IS_FETCHING';
export const DATA_FETCH_DID_ERR = 'DATA_FETCH_DID_ERR';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';

export const updateFilter = (filter = null, points) => {
    return {
        type: UPDATE_FILTER,
        payload: {
            filter: filter,
            points: points
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

export const dataIsFetching = bool => {
    return {
        type: DATA_IS_FETCHING,
        payload: {
            isFetching: bool
        }
    };
};

export const dataFetchDidErr = bool => {
    return {
        type: DATA_FETCH_DID_ERR,
        payload: {
            didErr: bool
        }
    };
};

export const dataFetchSuccess = data => {
    return {
        type: DATA_FETCH_SUCCESS,
        payload: {
            data: data
        }
    };
};

/*
* https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
*/
export const fetchData = url => {
    return dispatch => {
        dispatch(dataIsFetching(true));

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(dataIsFetching(false));

            return response;
        })
        .then(response => response.json())
        .then(data => dispatch(dataFetchSuccess(data)))
        .catch(() => dispatch(dataFetchDidErr(true)))
    };
}