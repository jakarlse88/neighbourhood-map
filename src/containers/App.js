import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import WrapperContainer from './WrapperContainer';

class App extends Component {

	constructor(props) {
		super(props);

		const { actions } = props;

		const venuesEndpoint = 'https://api.foursquare.com/v2/venues/search?';

		const params = {
			client_id: '3AHN3ZNXVZ3UDDKDUAEFCYMZ130RYHIYCURPW4SFHTGEG1GI',
			client_secret: 'ZOTNAKII5XW1DY53ZJZWP4V5SBB11MCJF1GZECPDBKY05WQ3',
			limit: 50,
			v: '20180612',
			intent: 'browse',
			radius: 1800,
			ll: '37.517236,127.047325'
		};

		actions.fetchData(venuesEndpoint + new URLSearchParams(params), { method: 'GET'});
	}

	render() {
		const {
			data,
			map,
			actions
		} = this.props;

		return (
			<WrapperContainer 
				actions={actions}
				data={data}
				map={map} 
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
		map: state.map
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);