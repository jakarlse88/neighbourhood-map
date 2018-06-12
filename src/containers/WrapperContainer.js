import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import MapContainer from './MapContainer';

class WrapperContainer extends Component {
    render() {
        const {
            actions,
            data,
            google,
            loaded,
            map
        } = this.props;

        return (
            <Fragment>
                <Header
                    showMenu={map.showMenu}
                    toggleMenu={actions.toggleMenu}
                />
                <MapContainer
                    activeMarker={map.activeMarker}
                    addMarkers={actions.addMarkers}
                    allPoints={map.allPoints}
                    clearMarkers={actions.clearMarkers}
                    filter={map.filter}
                    google={google}
                    loaded={loaded}
                    markers={map.markers}
                    onItemClick={actions.onMarkerClick}
                    onMapClick={actions.onstateClick}
                    onMarkerClick={actions.onMarkerClick}
                    selectedPoint={map.selectedPoint}
                    showingInfoWindow={map.showingInfoWindow}
                    showingPoints={map.showingPoints}
                    showMenu={map.showMenu}
                    updateFilter={actions.updateFilter}
                />
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(WrapperContainer)