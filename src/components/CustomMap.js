import React, { Component } from 'react';
import { updateGoogleInstance } from '../actions';

export class CustomMap extends Component {

    componentDidMount = () => {
        const {
            google,
            points,
            addMarkers
        } = this.props;

        let markers = [];

        const map = new google.maps.Map(this.refs.map, {
            center: {
                lat: 59.420662,
                lng: 10.673362
            }
        })

        const bounds = new google.maps.LatLngBounds();

        if (points) {
            for (let point of points) {
                const {
                    position,
                    name
                } = point;

                const marker = new google.maps.Marker({
                    map: map,
                    position: position,
                    name: name,
                    title: name,
                    animation: google.maps.Animation.DROP
                })

                markers.push(marker);

                bounds.extend(position);
            }
        }

        addMarkers(markers);

        this.setState({
            map: map,
            bounds: bounds
        })
    }

    componentDidUpdate = () => {
        const {
            bounds,
            map
        } = this.state;

        const {
            google,
            points,
            showingInfoWindow,
            activeMarker,
            markers
        } = this.props;

        let infoWindow = new google.maps.InfoWindow();

        for (let marker of markers) {
            marker.setMap(null);
        };

        while (markers.length > 0) {
            markers.pop();
        };

        if (points) {
            for (let point of points) {
                const {
                    position,
                    name
                } = point;

                const marker = new google.maps.Marker({
                    map: this.state.map,
                    position: position,
                    name: name,
                    title: name,
                    animation: google.maps.Animation.DROP
                })

                markers.push(marker);

                marker.addListener('click', () => {
                    this.populateInfoWindow(infoWindow, map, marker);
                })

                bounds.extend(position);
            }
        };

        map.fitBounds(bounds);

        if (showingInfoWindow) {
            const windowPosition = activeMarker.position;
            infoWindow = new google.maps.InfoWindow({
                position: windowPosition
            })
        };
    };

    populateInfoWindow = (infoWindow, map, marker) => {
        if (infoWindow.marker !== marker) {
            infoWindow.marker = marker;
            infoWindow.setContent(`<h2>${marker.title}</h2>`);
            infoWindow.open(map, marker);

            map.setCenter(marker.getPosition());

            infoWindow.addListener('closeclick', () => 
                infoWindow.marker = null);
        }
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };

        return (
            <section
                ref="map"
                className="google-map"
                style={style}
                onClick={this.handleMapClick} >
                Loading map...
            </section>
        )
    }
}