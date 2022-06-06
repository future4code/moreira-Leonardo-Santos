import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Global/GlobalContext.js";

const OrdersList = () => {
    const {getOrders, orders, isLoading} = useContext(GlobalContext);

    useEffect(() => {
        getOrders();
    }, []);
    
    const mountOrders = orders.map((order) => {
        return (
            <li key={order.id}>
                <p>pizza: {order.pizza}</p>
                <p>quantity: {order.quantity}</p>
            </li>
        );
    });

    return (
        <>
            <h2>Orders:</h2>
            {isLoading ? <h3>Loading...</h3> : <ul>{mountOrders}</ul>}
        </>
    );
};
export default OrdersList;