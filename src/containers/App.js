import React, { Component } from 'react';
import MenuContainer from './MenuContainer';
import Header from '../components/Header';
import escapeRegExp from 'escape-string-regexp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import CustomMapContainer from './CustomMapContainer';

class App extends Component {
	
	render() {
		let showingPoints;

		const { points,
				menu,
				actions,
				map } = this.props;

        if (points.all.length > 0) {
            const match = new RegExp(escapeRegExp(menu.query), 'i');
            showingPoints = points.all.filter(point => match.test(point.name));
        } else {
            showingPoints = points.all;
		}
		
		return (
			<div className="container">
				<Header
					hideMenu = { actions.hideMenu }
					showMenu = { actions.showMenu }
					isMenuShowing = { menu.showMenu } />
				{ menu.showMenu && (
				<MenuContainer
					onItemClick = { actions.onMarkerClick } 
					points = { showingPoints }
					showMenu = { menu.showMenu }
					updateQuery = { actions.updateQuery } />
				)}
				<CustomMapContainer
					onMarkerClick = { actions.onMarkerClick }
					onMapClick = { actions.onMapClick }
					points = { showingPoints }				
					activeMarker = { map.activeMarker }
					showingInfoWindow = { map.showingInfoWindow }
					selectedPoint = { map.selectedPoint } 
				/>
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