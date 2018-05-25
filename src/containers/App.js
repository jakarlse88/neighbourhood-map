import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class App extends Component {
  render() {
    return (
		<div>
			<Map
				google={this.props.google}
				zoom={13}
				initialCenter={{lat: 59.43403, lng: 10.65771}}>
				<Marker
					title="Moss Taekwondo Club"
					name="Moss Taekwondo Club"
					position={{ lat: 59.420662, lng: 10.673362 }}
				/>
				<Marker
					title="Moss Karate Club"
					name="Moss Karate Club"
					position={{ lat: 59.431586, lng: 10.649614 }}
				/>
				<Marker
					title="MUDO Gym & Martial Arts Moss"
					name="MUDO Gym & Martial Arts Moss"
					position={{ lat: 59.436959, lng: 10.662353 }}
				/>
				<Marker
					title="Dahnjun Taekwondo Klubb"
					name="Dahnjun Taekwondo Klubb"
					position={{ lat: 59.410793, lng: 10.678381 }}
				/>
				<Marker
					title="Goju Ryu Karate Rygge"
					name="Goju Ryu Karate Rygge"
					position={{ lat: 59.407491, lng: 10.696795 }}
				/>
				<Marker
					title="Moss National Taekwon-do Club"
					name="Moss National Taekwon-do Club"
					position={{ lat: 59.439116, lng: 10.667983 }}
				/>
			</Map>
		</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(App)
