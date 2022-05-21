import React, { useContext } from 'react';
import GlobalContext from '../../Global/GlobalContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const {cart ,totalValue, sendOrders} = useContext(GlobalContext);

    const cartItems = cart.map((item) => {
        return(
            <CartItem 
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                item={item}
            />
        );
    });

    return(
        <>
            <h3>Cart</h3>
            <ul>
                {cartItems}
            </ul>
            <p>Total value: ${totalValue.toFixed(2)}</p>
            {cart.length <= 0 ? <p>Empty cart :c </p> : <button type='button' onClick={() => sendOrders(cart)}>Send order</button>}
        </>
    );
};
export default Cart;