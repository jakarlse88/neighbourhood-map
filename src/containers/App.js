import React, { Component } from 'react';
import MenuContainer from './MenuContainer';
import Header from '../components/Header';
import MapContainer from './MapContainer';
import escapeRegExp from 'escape-string-regexp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class App extends Component {
	
	render() {
		let showingPoints;

        if (this.props.points.all.length > 0) {
            const match = new RegExp(escapeRegExp(this.props.menu.query), 'i');
            showingPoints = this.props.points.all.filter(point => match.test(point.name));
        } else {
            showingPoints = this.props.points.all;
		}
		
		return (
			<div className="container">
				<Header
					hideMenu = { this.props.actions.hideMenu }
					showMenu = { this.props.actions.showMenu }
					isMenuShowing = { this.props.menu.showMenu } />
				{ this.props.menu.showMenu && (
				<MenuContainer
					onItemClick = { this.props.actions.onMarkerClick } 
					points = { showingPoints }
					showMenu = { this.props.menu.showMenu }
					updateQuery = { this.props.actions.updateQuery } />
				)}
				<MapContainer
					onMarkerClick = { this.props.actions.onMarkerClick }
					onMapClick = { this.props.actions.onMapClick }
					points = { showingPoints }				
					activeMarker = { this.props.map.activeMarker }
					showingInfoWindow = { this.props.map.showingInfoWindow }
					selectedPoint = { this.props.map.selectedPoint } />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { 
		points: state.points,
		map: state.map,
		menu: state.menu
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);