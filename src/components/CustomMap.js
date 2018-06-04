import React, { Component } from 'react';
import CustomMarker from './CustomMarker';

export class CustomMap extends Component {
    handleMapClick = e => {
        // this.props.onMapClick(props);
    }

    handleMarkerClick = (point, marker) => {
        this.props.onMarkerClick(point, marker);
    }

    componentDidMount = () => {
        const {
            google,
            points,
            showingInfoWindow,
            activeMarker,
            selectedPoint,
            addMarker
        } = this.props;

        let markers = [];

        const map = new google.maps.Map(this.refs.map, {
            center: {
                lat: 59.420662,
                lng: 10.673362
            },
            zoom: 13,
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

                marker.addListener('click', (point, marker) => {
                    console.log(point, marker);
                    this.handleMarkerClick(point, marker);
                })

                bounds.extend(position);
            }
        }

        this.setState({
            map: map,
            markers: markers,
            bounds: bounds
        })
    }

    componentDidUpdate = () => {
        const {
            markers,
            bounds,
            map
        } = this.state;

        const {
            google,
            points,
            showingInfoWindow,
            activeMarker,
            selectedPoint,
            addMarker
        } = this.props;

        let infoWindow;

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

                marker.addListener('click', (point, marker, e) => {
                    console.log(point, marker);
                    this.handleMarkerClick(point, marker);
                })

                bounds.extend(position);
            }
        }
        map.fitBounds(bounds);

        if (showingInfoWindow) {
            const windowPosition = activeMarker.position;
            infoWindow = new google.maps.InfoWindow({
                position: windowPosition
            })
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