import React from 'react';
import '../styles/Menu.css';

export default function Menu(props) {
    return (
        <section className="menu-drawer">
            <input id="points-filter" type="text" placeholder="Filter your search" />
            <ul>
                {props.points.map(obj => (
                    <li key = {obj.name}>{obj.name}</li>
                ))}
            </ul>
        </section>
    )
}