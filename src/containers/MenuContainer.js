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
    
    render() {
        const {
            updateQuery,
            showingPoints,
            onItemClick,
            showMenu,
            google
        } = this.props;

        if (showMenu) {
            return (
                <Menu
                    google={google}
                    handleChange={this.handleChange}
                    updateQuery={updateQuery}
                    points={showingPoints}
                    onItemClick={onItemClick}
                    filterPoints={this.filterPoints}
                />
            )
        } else {
            return null;
        }
    }
}