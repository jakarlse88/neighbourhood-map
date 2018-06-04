import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class MenuContainer extends Component {
    
    handleChange = e => {
		const {
            filter,
			points,
            updateFilter
        } = this.props;

        updateFilter(e.target.value, points.all);
    }
    
    render() {
        const {
            updateQuery,
            points,
            onItemClick,
            showMenu
        } = this.props;

        if (showMenu) {
            return (
                <Menu
                    handleChange={this.handleChange}
                    updateQuery={updateQuery}
                    points={points}
                    onItemClick={onItemClick}
                    filterPoints={this.filterPoints}
                />
            )
        } else {
            return null;
        }
    }
}