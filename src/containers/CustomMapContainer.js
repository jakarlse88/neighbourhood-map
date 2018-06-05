import React, { Component, Fragment } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { CustomMap } from '../components/CustomMap';
import MenuContainer from '../containers/MenuContainer';

class CustomMapContainer extends Component {

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
            updateGoogleInstance,
            updateQuery,
            showingPoints,
            onItemClick,
            showMenu,
            filter,
            allPoints,
            updateFilter
        } = this.props;

        if (!loaded) {
            return <div>Map loading...</div>
        }

        return (
            <Fragment>
            <div className="map-container" style={style} >
                <CustomMap
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
            {showMenu && (
                <MenuContainer
                    google={google}
                    showMenu={showMenu}
                    filter={filter}
                    onItemClick={onMarkerClick}
                    allPoints={allPoints}
                    showingPoints={showingPoints}
                    updateFilter={updateFilter} />)}
            </Fragment>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(CustomMapContainer)