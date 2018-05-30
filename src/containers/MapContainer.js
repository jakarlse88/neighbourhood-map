import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class MapContainer extends Component {
    handleMarkerClick = (props, marker, e) => {
        this.props.onMarkerClick(props, marker);
    }
 
    handleMapClick = props => {
        this.props.onMapClick(props);
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh',
        }

        const bounds = new this.props.google.maps.LatLngBounds();
        for (let i = 0; i < this.props.points.length; i++) {
            bounds.extend(this.props.points[i].position);
        }

        return (
            <Map
                style = { style }
                google = { this.props.google }
                initialCenter = {{ lat: 59.43403, lng: 10.65771 }}
                bounds = { bounds }
                zoom = { 13 }
                onClick = { this.handleMapClick } 
                maxZoom = { 13 } >
                
                {this.props.points.map(obj => (
                <Marker
                    onClick = { (props, marker, e) => (
                        this.props.onMarkerClick(props, marker, e)
                    ) }
                    key = { obj.name }
                    title = { obj.name }
                    name = { obj.name }
                    position = { obj.position } /> ))}
                
                <InfoWindow
                    marker = { this.props.activeMarker }
                    visible = { this.props.showingInfoWindow } >
                    { this.props.selectedPoint &&
                    <h2>{ this.props.selectedPoint.name }</h2> }
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
  })(MapContainer)