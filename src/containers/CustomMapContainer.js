import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { CustomMap } from '../components/CustomMap';

class CustomMapContainer extends Component {

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        };

        const { google,
                points,
                showingInfoWindow,
                activeMarker,
                selectedPoint,
                loaded,
                onMarkerClick,
                onMapClick } = this.props;

        if (!loaded) {
            return <div>Map loading...</div>
        }

        return (
            <div className = "map-container" style = { style } >
                <CustomMap 
                    google = { google }
                    points = { points }
                    showingInfoWindow = { showingInfoWindow }
                    activeMarker = { activeMarker }
                    selectedPoint = { selectedPoint } 
                    onMarkerClick = { onMarkerClick }
                    onMapClick = { onMapClick } /> 
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
  })(CustomMapContainer)