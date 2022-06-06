import React, { useContext } from 'react';
import GlobalContext from '../../Global/GlobalContext';

const CartItem = (props) => {
    const {removeFromCart} = useContext(GlobalContext);

    return (
        <li>
            <p>{props.quantity}X</p>
            <p>{props.name}</p>
            <p>${props.price.toFixed(2)}</p>
            <button type='button' onClick={() => removeFromCart(props.item)}>Remove from cart</button>
        </li>
    );
};
export default CartItem;