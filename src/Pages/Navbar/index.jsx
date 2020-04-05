import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';


export const Navbar = () => {
    return (
        <div>
        <NavLink to="/">
         <Button ghost>Продукт</Button>
    </NavLink>
{'==== '}
    <NavLink to="/cart">
    <Button ghost>корзина</Button>
    </NavLink>
    </div>
    

    )
}