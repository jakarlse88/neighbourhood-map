import React, { Component } from 'react';
import '../styles/Menu.css';

export default class Menu extends Component {
    render() {
        const {
            handleChange,
            handleClick,
            points
        } = this.props;

        return (
            <section className="menu-drawer">
                <input
                    id="points-filter"
                    onChange={e => handleChange(e)}
                    placeholder="Filter your search"
                    type="text"
                />
                <img 
                    alt="Powered by Foursquare" 
                    className="foursquare-img"
                    src={require("../images/foursquare.png")} 
                />
                <ul>
                    {points &&
                        points.map(obj => (
                            <li key={obj.id}>
                                <button
                                    onClick={() =>
                                        handleClick(obj.name)}>
                                        {obj.name}
                                </button>
                            </li>
                        ))}
                </ul>
            </section>
        )
    }
}