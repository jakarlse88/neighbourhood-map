import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class MenuContainer extends Component {
    
    handleChange = e => {
		const {
            allPoints,
            updateFilter
        } = this.props;

        updateFilter(e.target.value, allPoints);
    }

    handleClick = pointName => {
        const {
            onListItemClick
        } = this.props;

        onListItemClick(pointName);
    }
    
    render() {
        const {
            google,
            showingPoints,
            showMenu,
            updateQuery
        } = this.props;

        if (showMenu) {
            return (
                <Menu
                    filterPoints={this.filterPoints}
                    google={google}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    points={showingPoints}
                    updateQuery={updateQuery}
                />
            )
        } else {
            return null;
        }
    }
}