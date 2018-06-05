import React, { Component, Fragment } from 'react';
import '../styles/Header.css';
import FontAwesome from 'react-fontawesome';
import MenuContainer from '../containers/MenuContainer';

export default class Header extends Component {
    state = {
        showMenu: true
    };

    handleClick = props => {
        let shouldMenuShow = this.state.showMenu ? false : true;

        this.setState({
            showMenu: shouldMenuShow
        });
    };

    render() {
        const {
            filter,
            onMarkerClick,
            allPoints,
            showingPoints,
            updateFilter
        } = this.props;

        const { 
            showMenu 
        } = this.state;

        return (
            <Fragment>
                <header className="site-header">
                    <div
                        type="button"
                        onClick={this.handleClick}>
                        <FontAwesome
                            name="bars"
                            size="2x"
                            className="menu-icon" />
                    </div>
                    <h1>Neighbourhood Map</h1>
                </header>
                {showMenu && (
                    <MenuContainer
                        showMenu={showMenu}
                        filter={filter}
                        onItemClick={onMarkerClick}
                        allPoints={allPoints}
                        showingPoints={showingPoints}
                        updateFilter={updateFilter} />)}
            </Fragment>
        )
    }
}