import React, { Fragment } from 'react';
import { Button } from 'antd';


export const StorageForm = ({store, addItem}) => {
    return (
    <Fragment>             
         <tbody>
         <tr>  
            <td >{store.name}</td>
            <th >{store.price}</th>
            <th ><Button onClick={addItem} type="primary">+</Button></th>
        </tr>
         </tbody>       
    </Fragment>)
}