import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import CustomMapContainer from './CustomMapContainer';

class App extends Component {

	render() {
		const {
			actions,
			map
		} = this.props;

		return (
			<div className="container">
				<Header
					filter={map.filter}
					onItemClick={actions.onMarkerClick}
					showingPoints={map.showingPoints}
					allPoints={map.allPoints}
					updateFilter={actions.updateFilter} />
				<CustomMapContainer
					markers={map.markers}
					clearMarkers={actions.clearMarkers}
					addMarker={actions.addMarker}
					onMarkerClick={actions.onMarkerClick}
					onMapClick={actions.onMapClick}
					points={map.showingPoints}
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
		map: state.map
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);