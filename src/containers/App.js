import React, { Component } from 'react';
import MenuContainer from './MenuContainer';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import CustomMapContainer from './CustomMapContainer';

class App extends Component {

	render() {
		const {
			points,
			menu,
			actions,
			map
		} = this.props;

		return (
			<div className="container">
				<Header
					hideMenu={actions.hideMenu}
					showMenu={actions.showMenu}
					isMenuShowing={menu.showMenu} />
				{menu.showMenu && (
					<MenuContainer
						filter={map.filter}
						onItemClick={actions.onMarkerClick}
						points={points}
						showMenu={menu.showMenu}
						updateFilter={actions.updateFilter} />
				)}
				<CustomMapContainer
					markers={map.markers}
					clearMarkers={actions.clearMarkers}
					addMarker={actions.addMarker}
					onMarkerClick={actions.onMarkerClick}
					onMapClick={actions.onMapClick}
					points={points.showingPoints}
					activeMarker={map.activeMarker}
					showingInfoWindow={map.showingInfoWindow}
					selectedPoint={map.selectedPoint}
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