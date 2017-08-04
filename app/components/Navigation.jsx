import React from 'react';
import {NavLink} from 'react-router-dom';

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">Timer</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/countdown" activeClassName="active-link">Countdown</NavLink>
                    </li>                    
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Created by <a href="https://github.com/huylv1" target="_blank">levanhuy</a></li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Navigation;