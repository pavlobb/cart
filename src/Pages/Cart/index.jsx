import React, { useState } from 'react';
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
        price: 20,
        
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





    const addItem = items => {



        const fndx = cartItems.findIndex(e => e.id === items.id);

        if (fndx === -1) {
            addCartItems([...cartItems, { ...items, count: 1, total: items.price }]);


        } else {

            const aaddartItems = cartItems.map(cartItem => {
                if (cartItem.id === items.id) {
                    cartItem.total = cartItem.total + cartItem.price
                    cartItem.count++;

                }
                return cartItem
            })
            addCartItems(aaddartItems);
        }

    }

    const dcmItems = items => {
        const aaddartItems = cartItems.map(cartItem => {
           
            if (cartItem.id === items.id && cartItem.count >= 2 ) {

                cartItem.total = cartItem.total - cartItem.price
                    cartItem.count--;
                console.log(items.price);
                

            }
            return cartItem
        })
        addCartItems(aaddartItems);
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
                {storage.map((store, index) => {
                    return (
                        <tr id={index}>
                            <th >{store.name}</th>
                            <th >{store.price}</th>
                            <th >
                                <Button onClick={e => 
                                addItem(store, index)} type="primary">
                                    Добавити
                                    </Button>
                                    </th>
                        </tr>
                    )
                })}
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
                {cartItems.map((cartItem, index) => {
                    return (

                        <tr id={index} >
                            <th>{cartItem.id}</th>
                            <th >{cartItem.name}</th>
                            <th ><Button onClick={e => dcmItems(cartItem)} type="primary" danger>
                                -
                                </Button >

                                <Button onClick={e => addItem(cartItem)} type="primary">
                                    +
                                    </Button></th>
                            <th >{cartItem.count}</th>
                            <th >{cartItem.total}$</th>
                        </tr>

                    )
                })}

            </tbody>
        </table>


    </div>)
}