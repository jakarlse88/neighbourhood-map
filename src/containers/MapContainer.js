import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        selectedPoint: {},
        activeMarker: {},
        showingInfoWindow: false,
    }
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPoint: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClick = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            })
        }
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
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
                zoom = { 12 }
                onClick = { this.onMapClick }
            >
                {this.props.points.map(obj => (
                <Marker
                    onClick = { this.onMarkerClick }
                    key = { obj.name }
                    title = { obj.name }
                    name = { obj.name }
                    position = { obj.position }
                />
                ))}
                <InfoWindow
                    marker = { this.state.activeMarker }
                    visible = { this.state.showingInfoWindow }
                >
                    <h2>{ this.state.selectedPoint.name }</h2>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
  })(MapContainer)