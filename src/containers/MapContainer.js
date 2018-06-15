import React, { Component } from 'react';
import { Map } from '../components/Map';

export default class MapContainer extends Component {

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };

        const {
            activeMarker,
            addMarkers,
            allPoints,
            clearMarkers,
            data,
            google,
            loaded,
            markers,
            onMapClick,
            onMarkerClick,
            selectedPoint,
            showingInfoWindow,
            showingPoints,
            showMenu,
            updateFilter
        } = this.props;

        if (!loaded) {
            return <div>Map loading...</div>
        }

        return (
            <section className="map-container" style={style} >
                <Map
                    data={data}
                    activeMarker={activeMarker}
                    addMarkers={addMarkers}
                    allPoints={allPoints}
                    clearMarkers={clearMarkers}
                    google={google}
                    markers={markers}
                    onMapClick={onMapClick} 
                    onMarkerClick={onMarkerClick}
                    selectedPoint={selectedPoint}
                    showingInfoWindow={showingInfoWindow}
                    showingPoints={showingPoints}
                    showMenu={showMenu}
                    updateFilter={updateFilter}
                />
            </section>
        )
    }
}
