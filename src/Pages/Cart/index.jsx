import React, { useState, Fragment } from 'react';
//import {CartItemForm}  from './CartItemForm';
import { Button } from 'antd';
//import {StorageForm} from './StorageForm';
import './index.css';


const storage = [
    {
        id: 1,
        name: 'cap',
        count: 0,
        price: 10
    },
    {
        id: 2,
        name: 'jacket',
        count: 0,
        price: 20
    },
    {
        id: 3,
        name: 'shorts',
        count: 0,
        price: 15

    }
];
export const Cart = () => {

  const [cartItems, addCartItems] = useState([]);
  console.log(cartItems);
    




   const addItem = store => {
   
    
 
 const fndx = cartItems.findIndex(e => e.id === store.id);
 console.log(cartItems, 'fndx',fndx)
 if (fndx === -1) {
    addCartItems([...cartItems, {  ...store, count: 1}]);
 }
   

}






    return (<div className="container">
    
    <h1>Товар</h1>
     <table className="table">
         <thead>
                <tr>     
                    <th >Название товару</th> 
                    <th >Цена</th>
                    <th >Добавить</th>
                </tr>
                </thead> 
                <tbody >     
            {storage.map((store, index) =>(
            
            
         <tr id={index}>  
            <th >{store.name}</th>
            <th >{store.price}</th>
            <th ><Button onClick={e => addItem(store)} type="primary">+</Button></th>
        </tr>
            ) )}     
       </tbody>
       </table>

       <h1 className="text">Корзина</h1>
        <table className="table">
         <thead>
                <tr>
                    <th>id</th>
                    <th >Название товару</th>
                    <th ></th>
                    <th >Количество</th>
                    <th >Цена</th>
                </tr>
                </thead>
                <tbody >
                {cartItems.map((cartItem, index) => ( 
            
              <tr id={ index} >
        <th>{cartItem.id}</th>
            <th >{cartItem.name}</th>
            <th ><Button type="primary"danger>-</Button><Button type="primary">+</Button></th>
            <th >{cartItem.count}</th>
            <th >{cartItem.price}$</th>
        </tr>
       
        ))}

            </tbody>     
         </table>


    </div>)
}