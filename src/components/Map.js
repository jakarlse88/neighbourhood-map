import React, { Component, Fragment } from 'react';
import MenuContainer from '../containers/MenuContainer';

export class Map extends Component {

    componentDidMount = () => {
        const {
            google,
            showingPoints,
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

                console.log(consolidatedLocation);

                const marker = new google.maps.Marker({
                    map: map,
                    position: consolidatedLocation,
                    name: name,
                    title: name,
                    animation: google.maps.Animation.DROP
                })

                markers.push(marker);

                bounds.extend(consolidatedLocation);
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

                const marker = new google.maps.Marker({
                    map: this.state.map,
                    position: consolidatedLocation,
                    name: name,
                    title: name,
                    animation: google.maps.Animation.DROP
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
            infoWindow.marker = marker;
            infoWindow.setContent(`<h2>${marker.title}</h2>`);
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
                <section
                    id="map"
                    ref="map"
                    className="google-map"
                    style={style}
                    onClick={this.handleMapClick} >
                    Loading map...
                </section>
                <MenuContainer
                    showMenu={showMenu}
                    filter={filter}
                    onListItemClick={this.onListItemClick}
                    allPoints={allPoints}
                    showingPoints={showingPoints}
                    updateFilter={updateFilter}
                    addMarkers={addMarkers}
                />
            </Fragment>
        )
    }
}