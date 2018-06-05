import React, { Component } from 'react';
import '../styles/Menu.css';
import { InfoWindow } from 'google-maps-react';
import { filterPoints } from '../actions';

export default class Menu extends Component {
    render() {
        const {
            updateQuery,
            points,
            filterPoints,
            handleChange
        } = this.props;

        return (
            <section className="menu-drawer">
                <input
                    id="points-filter"
                    type="text"
                    placeholder="Filter your search"
                    onChange={e => handleChange(e)}
                />
                <ul>
                    {points &&
                        points.map(obj => (
                            <li
                                onClick={() =>
                                    this.onClick(obj.name, obj.location)}
                                key={obj.name}>
                                {obj.name}
                            </li>
                        ))}
                </ul>
            </section>
        )
    }
}