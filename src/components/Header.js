import React, { Component } from 'react';
import '../styles/Header.css';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {
    handleClick = e => {
        this.props.toggleMenu();
    }
    
    render() {
        return (
            <header className = "site-header">
                <div 
                    type = "button"
                    onClick = { this.handleClick }>
                    <FontAwesome 
                        name = "bars" 
                        size = "2x" 
                        className = "menu-icon" />
                </div>
                <h1>Neighbourhood Map</h1>
            </header>
        )
    }
}