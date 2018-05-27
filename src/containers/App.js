import React, { Component } from 'react';
import MenuContainer from './MenuContainer';
import Header from '../components/Header';
import MapContainer from '../containers/MapContainer';
import escapeRegExp from 'escape-string-regexp';

export default class App extends Component {
	state = {
		showMenu: null,
		query: '',
		points: [
			{ 
				name: "Moss Taekwondo Club", 
				position: { lat: 59.420662, lng: 10.673362 }
			},
			{ 
				name: "Moss Karate Club", 
				position: { lat: 59.431586, lng: 10.649614 }
			},
			{ 
				name: "MUDO Gym & Martial Arts Moss", 
				position: { lat: 59.436959, lng: 10.662353 }
			},
			{ 
				name: "Dahnjun Taekwondo Klubb", 
				position: { lat: 59.410793, lng: 10.678381 }
			}, 
			{ 
				name: "Goju Ryu Karate Rygge", 
				position: { lat: 59.407491, lng: 10.696795 }
			},
			{ 
				name: "Moss National Taekwon-do Club", 
				position: { lat: 59.439116, lng: 10.667983 }
			}
		]
	}
	
	componentDidMount = () => {
		this.setState({
			showMenu: true
		})
	}

	updateQuery = query => {
        this.setState({ query: query });
    }

	toggleMenu = () => {
		if (this.state.showMenu) {
			this.setState({
				showMenu: false
			})
		} else {
			this.setState({
				showMenu: true
			})
		}
	}
	
	render() {
		let showingPoints;

        if (this.state.points.length > 0) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingPoints = this.state.points.filter(point => match.test(point.name));
        } else {
            showingPoints = this.state.points;
        }
		return (
			<div className="container">
				<Header
					toggleMenu = { this.toggleMenu } 
				/>
				<MenuContainer 
					points = { showingPoints }
					showMenu = { this.state.showMenu }
					updateQuery = { this.updateQuery }
				/>
				<MapContainer
					points = { showingPoints }				
				/>
			</div>
		);
	}
}
