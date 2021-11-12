import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <h1>Meditate.</h1>
            <nav>
                <NavLink exact to='/'>home</NavLink>
                <NavLink to='/meditate'>meditate</NavLink>
            </nav>
        </header>
    )
};
