import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class MenuContainer extends Component {
    render() {
        return (
            this.props.showMenu && (
                <Menu 
                    points={this.props.points}
                    toggleMenu={this.toggleMenu}
                />
            )
        )
    } 
}