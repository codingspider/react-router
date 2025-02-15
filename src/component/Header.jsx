import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
