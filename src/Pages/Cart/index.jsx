import React, { useState } from 'react';
import {CartItemForm}  from './CartItemForm';
import {StorageForm} from './StorageForm';
import './index.css';


const storage = [
    {
        id: 1,
        name: 'cap',
        quantity: 2,
        price: 10
    },
    {
        id: 2,
        name: 'jacket',
        quantity: 2,
        price: 20
    },
    {
        id: 3,
        name: 'shorts',
        quantity: 2,
        price: 15
    }
];
export const Cart = () => {

  const [cartItems, addCartItems] = useState([]);
  

   const addItem = (store) => {
    addCartItems(cartItems.concat(store));
  
}
console.log(cartItems);


    return (<div className="container">
    
    <h1>Товар</h1>
     <table className="table"><thead>
                <tr>     
                    <th >Название товару</th> 
                    <th >Цена</th>
                    <th >Добавить</th>
                </tr>
                </thead> 
                
            {storage.map(store =>(<StorageForm id={store.id} store={store} addItem={e => addItem(store)} />) )}     
       
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
                {cartItems.map(cartItem =>(<CartItemForm id={cartItem.id} cartItem={cartItem}   />))}
                
                
                <td ></td>
            <td >Общая сума</td>
            <td></td>
            <th >30</th>
            <th >20</th>     
                
         </table>


    </div>)
}