import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import MapContainer from './MapContainer';

class WrapperContainer extends Component {
    render() {
        const {
            state,
            actions,
            google,
            loaded
        } = this.props;

        return (
            <Fragment>
                <Header
                    toggleMenu={actions.toggleMenu} 
                />
                <MapContainer
                    activeMarker={state.activeMarker}
                    addMarkers={actions.addMarkers}
                    allPoints={state.allPoints}
                    clearMarkers={actions.clearMarkers}
                    filter={state.filter}
                    google={google} // --------------------------
                    loaded={loaded}
                    markers={state.markers}
                    onItemClick={actions.onMarkerClick}
                    onMapClick={actions.onstateClick}
                    onMarkerClick={actions.onMarkerClick}
                    selectedPoint={state.selectedPoint}
                    showingInfoWindow={state.showingInfoWindow}
                    showingPoints={state.showingPoints}
                    showMenu={state.showMenu}
                    updateFilter={actions.updateFilter}
                />
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(WrapperContainer)