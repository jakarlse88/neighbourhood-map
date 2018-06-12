import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import WrapperContainer from './WrapperContainer';

class App extends Component {

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