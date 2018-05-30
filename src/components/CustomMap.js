import React, { Component } from 'react';

export class CustomMap extends Component {
    handleMapClick = e => {
        // this.props.onMapClick(props);
    }

    handleMarkerClick = (point, marker) => {
        this.props.onMarkerClick(point, marker);
    }

    componentDidMount = () => {
        let infoWindow;

        const { google, 
                points, 
                showingInfoWindow,
                activeMarker, 
                selectedPoint } = this.props;
        
        const map = new google.maps.Map(this.refs.map, {
            center: {
                lat: 59.420662,
                lng: 10.673362
              },
            zoom: 13,
            maxZoom: 13
        })

        if (points) {
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                console.log(point);
                const marker = new google.maps.Marker({
                    map: map,
                    position: point.position,
                    name: point.name,
                    title: point.name,
                    animation: google.maps.Animation.DROP
                })
                marker.addListener('click', (point, marker) => {
                    console.log(point, marker);
                    this.handleMarkerClick(point, marker);
                })
            }
        }

        const bounds = new google.maps.LatLngBounds();
        for (let i = 0; i < points.length; i++) {
            bounds.extend(points[i].position);
        }

        if (showingInfoWindow &&
            activeMarker &&
            selectedPoint) {
                infoWindow = new google.maps.InfoWindow({
                    content: selectedPoint.name 
            })
        }
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };

        return (
            <div 
                ref="map" 
                className="google-map" 
                style={style}
                onClick = { this.handleMapClick } >
                    Loading map...
            </div>
        )
    }
}