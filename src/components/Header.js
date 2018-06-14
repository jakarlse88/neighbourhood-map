import React, { Component } from 'react';
import '../styles/Header.css';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {

    handleClick = () => {
        this.props.toggleMenu(this.props.showMenu);
    };

    render() {
        return (
            <header className="site-header">
                <div
                    className="menu-icon-container"
                    type="button"
                    onClick={this.handleClick}>
                    <FontAwesome
                        name="bars"
                        size="2x"
                        className="menu-icon" />
                </div>
                <h1>Seoul Ice Cream Map</h1>
            </header>
        )
    }
}