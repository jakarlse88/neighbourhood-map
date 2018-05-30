import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class MenuContainer extends Component {
    render() {
        if (this.props.showMenu) {
            return (
                <Menu
                    updateQuery = { this.props.updateQuery } 
                    points = { this.props.points }
                    onItemClick = { this.props.onItemClick}
                />
            )
        } else {
            return null;
        }
    } 
}