import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
        <NavLink to="/">
        Продукт
    </NavLink>
  {'             '}
    <NavLink to="/cart">
        корзина
    </NavLink>
    </div>
    

    )
}