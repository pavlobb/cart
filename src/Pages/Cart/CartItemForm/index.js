import React, { Fragment } from 'react';
import { Button } from 'antd';




export const CartItemForm = ({cartItem}) => {
   
   
   return (
   <Fragment>
       
         <tr id={cartItem.id}>
   <td >{cartItem.id}</td>
            <td >{cartItem.name}</td>
            <th ><Button type="primary"danger>-</Button><Button type="primary">+</Button></th>
            <th >{cartItem.count}</th>
            <th >{cartItem.price}$</th>
        </tr>
        
        
         
        </Fragment>)
}