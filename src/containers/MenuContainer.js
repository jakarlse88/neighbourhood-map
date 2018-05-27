import React, { Component } from 'react';
import Menu from '../components/Menu';
import escapeRegExp from 'escape-string-regexp';

export default class MenuContainer extends Component {
    state = {
        query: ''
    }

    updateQuery = query => {
        this.setState({ query: query });
    }

    render() {
        let showingPoints;

        if (this.props.points.length > 0) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingPoints = this.props.points.filter(point => match.test(point.name));
        } else {
            showingPoints = this.props.points;
        }

        return (
            this.props.showMenu && (
                <Menu
                    updateQuery = { this.updateQuery } 
                    points = { showingPoints }
                    toggleMenu = { this.toggleMenu }
                />
            )
        )
    } 
}