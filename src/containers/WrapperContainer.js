import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import MapContainer from './MapContainer';

class WrapperContainer extends Component {
    render() {
        const {
            actions,
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
                <footer
                    className="page-footer">
                    <p>
                        Icons made by <a href="http://www.freepik.com" title="Freepik" >Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
                    </p>
                </footer>
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(WrapperContainer)