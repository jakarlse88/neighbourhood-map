import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js';
import { GoogleApiWrapper, Map } from 'google-maps-react';

class App extends Component {
  render() {
    return (
		<div>
			<Map 
				google={this.props.google}
				zoom={12}
				mapCenter={{lat: 40.7485722, lng: -74.0068633}}
			/>
		</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQBmwAFnOLNr7Nz-bPMQBU-qUUn4xLfho'
})(App)
