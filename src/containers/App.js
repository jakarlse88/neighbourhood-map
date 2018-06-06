import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import WrapperContainer from './WrapperContainer';

class App extends Component {

	render() {
		const {
			state,
			actions
		} = this.props;

		return (
			<WrapperContainer 
				state={state}
				actions={actions} 
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		state: state.state
	};
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);