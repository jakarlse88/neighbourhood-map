import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Header from '../components/Header';
import MapContainer from './MapContainer';
import MenuContainer from '../containers/MenuContainer';

class WrapperContainer extends Component {
    render() {
        const {
            state,
            actions
        } = this.props;

        const {
            google,
            loaded
        } = this.props;

        return (
            <Fragment>
                <Header
                    toggleMenu={actions.toggleMenu} 
                />
                {state.showMenu && (
                <MenuContainer
                    google={google}
                    showMenu={state.showMenu}
                    filter={state.filter}
                    onItemClick={actions.onMarkerClick}
                    allPoints={state.allPoints}
                    showingPoints={state.showingPoints}
                    updateFilter={actions.updateFilter} />)}
                <MapContainer
                    loaded={loaded}
                    google={google}
                    filter={state.filter}
                    onItemClick={actions.onMarkerClick}
                    showingPoints={state.showingPoints}
                    allPoints={state.allPoints}
                    updateFilter={actions.updateFilter}
                    markers={state.markers}
                    clearMarkers={actions.clearMarkers}
                    addMarkers={actions.addMarkers}
                    onMarkerClick={actions.onMarkerClick}
                    onMapClick={actions.onstateClick}
                    points={state.showingPoints}
                    activeMarker={state.activeMarker}
                    showingInfoWindow={state.showingInfoWindow}
                    selectedPoint={state.selectedPoint}
                    addMarker={actions.addMarker}
                    showMenu={state.showMenu}
                />
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(WrapperContainer)