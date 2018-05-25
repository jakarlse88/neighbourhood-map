import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class App extends Component {
	state = {
		points: [
			{ name: "Moss Taekwondo Club", position: { lat: 59.420662, lng: 10.673362 }},
			{ name: "Moss Karate Club", position: { lat: 59.431586, lng: 10.649614 }},
			{ name: "MUDO Gym & Martial Arts Moss", position: { lat: 59.436959, lng: 10.662353 }},
			{ name: "Dahnjun Taekwondo Klubb", position: { lat: 59.410793, lng: 10.678381 }}, 
			{ name: "Goju Ryu Karate Rygge", position: { lat: 59.407491, lng: 10.696795 }},
			{ name: "Moss National Taekwon-do Club", position: { lat: 59.439116, lng: 10.667983 }}
		]
	}
	
	render() {
    return (
		<div>
			<Map
				google={this.props.google}
				zoom={13}
				initialCenter={{lat: 59.43403, lng: 10.65771}}>
				{this.state.points.map(obj => (
					<Marker
						title={obj.name}
						name={obj.name}
						position={obj.position}
					/>
				))}
			</Map>
		</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(App)