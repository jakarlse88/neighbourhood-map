import React, { Component } from 'react';
import '../styles/Menu.css';

export default class Menu extends Component {

    render() {
        const {
            points,
            handleChange,
            google
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