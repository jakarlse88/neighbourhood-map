import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import MapContainer from './MapContainer';
import MenuContainer from '../containers/MenuContainer';

class WrapperContainer extends Component {
    render() {
        const {
            map,
            actions
        } = this.props; /* ¯\_(ツ)_/¯ */

        const {
            google,
            loaded
        } = this.props;

        return (
            <Fragment>
                <Header
                    toggleMenu={actions.toggleMenu} 
                />
                {map.showMenu && (
                <MenuContainer
                    google={google}
                    showMenu={map.showMenu}
                    filter={map.filter}
                    onItemClick={actions.onMarkerClick}
                    allPoints={map.allPoints}
                    showingPoints={map.showingPoints}
                    updateFilter={actions.updateFilter} />)}
                <MapContainer
                    loaded={loaded}
                    google={google}
                    filter={map.filter}
                    onItemClick={actions.onMarkerClick}
                    showingPoints={map.showingPoints}
                    allPoints={map.allPoints}
                    updateFilter={actions.updateFilter}
                    markers={map.markers}
                    clearMarkers={actions.clearMarkers}
                    addMarkers={actions.addMarkers}
                    onMarkerClick={actions.onMarkerClick}
                    onMapClick={actions.onMapClick}
                    points={map.showingPoints}
                    activeMarker={map.activeMarker}
                    showingInfoWindow={map.showingInfoWindow}
                    selectedPoint={map.selectedPoint}
                    addMarker={actions.addMarker}
                    showMenu={map.showMenu}
                />
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(WrapperContainer)