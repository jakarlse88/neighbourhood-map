import React, { Component } from 'react';
import '../styles/Menu.css';
import { InfoWindow } from 'google-maps-react';

export default class Menu extends Component {
    onClick = (name, location) => {
        return (
            <InfoWindow
                position = { location }
            >
                <h2>name</h2>
            </InfoWindow>
        )
    }
    
    render() {
        return (
            <section className="menu-drawer">
                <input 
                    id="points-filter" 
                    type="text" 
                    placeholder="Filter your search"
                    onChange = { e => this.props.updateQuery(e.target.value) } 
                    />
                <ul>
                    {this.props.points.map(obj => (
                        <li 
                            onClick = { () => this.onClick(obj.name, obj.location) }
                            key = {obj.name}
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}