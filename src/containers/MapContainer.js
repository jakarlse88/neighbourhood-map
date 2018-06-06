import React, { Component, Fragment } from 'react';
import { Map } from '../components/Map';

export default class MapContainer extends Component {

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };

        const {
            google,
            points,
            showingInfoWindow,
            activeMarker,
            selectedPoint,
            loaded,
            onMarkerClick,
            onMapClick,
            addMarkers,
            clearMarkers,
            markers,
        } = this.props;

        if (!loaded) {
            return <div>Map loading...</div>
        }

        return (
            <Fragment>
            <div className="map-container" style={style} >
                <Map
                    markers={markers}
                    clearMarkers={clearMarkers}
                    addMarkers={addMarkers}
                    google={google}
                    points={points}
                    showingInfoWindow={showingInfoWindow}
                    activeMarker={activeMarker}
                    selectedPoint={selectedPoint}
                    onMarkerClick={onMarkerClick}
                    onMapClick={onMapClick} />
            </div>
            
            </Fragment>
        )
    }
}
