import React, { Component, Fragment } from 'react';
import MenuContainer from '../containers/MenuContainer';
import '../styles/Map.css';

export class Map extends Component {

    componentDidMount = () => {
        const {
            google,
            // showingPoints,
            // addMarkers
        } = this.props;

        // let markers = [];

        const map = new google.maps.Map(this.refs.map, {
            center: {
                lat: 59.420662,
                lng: 10.673362
            },
            zoom: 14,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
        });

        const bounds = new google.maps.LatLngBounds();

        // if (showingPoints) {
        //     for (let point of showingPoints) {
        //         const {
        //             location,
        //             name
        //         } = point;

        //         const consolidatedLocation = {
        //             lat: location.lat,
        //             lng: location.lng
        //         };

        //         const marker = new google.maps.Marker({
        //             map: map,
        //             position: consolidatedLocation,
        //             name: name,
        //             title: name,
        //             animation: google.maps.Animation.DROP
        //         })

        //         markers.push(marker);

        //         bounds.extend(consolidatedLocation);
        //     }
        // }

        // addMarkers(markers);

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
            activeMarker,
            google,
            markers,
            showingInfoWindow,
            showingPoints
        } = this.props;

        let infoWindow = new google.maps.InfoWindow();

        for (let marker of markers) {
            marker.setMap(null);
        };

        while (markers.length > 0) {
            markers.pop();
        };

        if (showingPoints) {
            for (let point of showingPoints) {
                const {
                    location,
                    name
                } = point;

                const consolidatedLocation = {
                    lat: location.lat,
                    lng: location.lng
                };

                const icon = require('../images/ice-cream.png');

                const marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    map: this.state.map,
                    name: name,
                    icon: icon,
                    position: consolidatedLocation,
                    title: name
                })

                markers.push(marker);

                marker.addListener('click', () => {
                    this.populateInfoWindow(infoWindow, map, marker);
                    this.toggleBounce(marker);
                });

                bounds.extend(consolidatedLocation);
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
            let currentPoint = null;

            for (let point of this.props.allPoints) {
                if (point.name === marker.name) {
                    currentPoint = point;
                }
            }
            
            infoWindow.marker = marker;

            // No 'undefined' fields
            let content = '';
            if (currentPoint.name) content += `<h2>${currentPoint.name}</h2>`; 
            content += `<p>`;
            if (currentPoint.location.address) content += `<span class="address">Address: </span><span class=content">${currentPoint.location.address}, `;
            if (currentPoint.location.postalCode) content += `${currentPoint.location.postalCode}, `;
            if (currentPoint.location.city) content += `${currentPoint.location.city}, `;
            if (currentPoint.location.country) content += `${currentPoint.location.country}`; 
            content += `</span></p>`;
            content += `<a href="https://foursquare.com/venue/${currentPoint.id}?ref=3AHN3ZNXVZ3UDDKDUAEFCYMZ130RYHIYCURPW4SFHTGEG1GI">
                        Visit this venue's page on Foursquare for more info!</a>`;


            infoWindow.setContent(content);
            infoWindow.open(map, marker);

            map.setCenter(marker.getPosition());

            infoWindow.addListener('closeclick', () =>
                infoWindow.marker = null);
        }
    }

    onListItemClick = pointName => {
        const { google, markers } = this.props;

        for (let marker of markers) {
            if (marker.name === pointName) {
                google.maps.event.trigger(marker, 'click');
            };
        };
    };

    toggleBounce = marker => {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
        }
        
        setTimeout(() => marker.setAnimation(null), 3000);
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };

        const {
            allPoints,
            showingPoints,
            showMenu,
            filter,
            updateFilter,
            addMarkers
        } = this.props;

        return (
            <Fragment>
                <MenuContainer
                    showMenu={showMenu}
                    filter={filter}
                    onListItemClick={this.onListItemClick}
                    allPoints={allPoints}
                    showingPoints={showingPoints}
                    updateFilter={updateFilter}
                    addMarkers={addMarkers}
                />
                <section
                    id="map"
                    ref="map"
                    className="google-map"
                    style={style}
                    onClick={this.handleMapClick} >
                    Loading map...
                </section>
            </Fragment>
        )
    }
}