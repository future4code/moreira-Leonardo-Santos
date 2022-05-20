import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest.js";
import baseUrl from '../../constants/baseUrl.js';

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [makeRequest, isLoading] = useRequest();
    
    const getOrders = async () => {
        const ordersFromBase = await makeRequest( "get", `${baseUrl}orders`);
        
        setOrders(ordersFromBase);
    };

    useEffect(() => {
        getOrders();
    }, []);
    
    const mountOrders = orders.map((order) => {
        return (
            <li key={order.id}>
                <p>{order.pizza}</p>
                <p>quantity: {order.quantity}</p>
            </li>
        );
    });

    return (
        <>
            <h2>Pizzas:</h2>
            {isLoading ? <h3>Loading...</h3> : <ul>{mountOrders}</ul>}
        </>
    );
};
export default OrdersList;