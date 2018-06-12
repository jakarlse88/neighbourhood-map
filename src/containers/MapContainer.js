import React, { Component, Fragment } from 'react';
import { Map } from '../components/Map';

export default class MapContainer extends Component {

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };

        const {
            allPoints,
            activeMarker,
            addMarkers,
            clearMarkers,
            google,
            loaded,
            markers,
            onMapClick,
            onMarkerClick,
            selectedPoint,
            showingInfoWindow,
            showingPoints,
            showMenu
        } = this.props;

        if (!loaded) {
            return <div>Map loading...</div>
        }

        return (
            <section className="map-container" style={style} >
                <Map
                    allPoints={allPoints}
                    activeMarker={activeMarker}
                    addMarkers={addMarkers}
                    clearMarkers={clearMarkers}
                    google={google}
                    markers={markers}
                    onMapClick={onMapClick} 
                    onMarkerClick={onMarkerClick}
                    showingPoints={showingPoints}
                    selectedPoint={selectedPoint}
                    showingInfoWindow={showingInfoWindow}
                    showMenu={showMenu}
                />
            </section>
        )
    }
}
