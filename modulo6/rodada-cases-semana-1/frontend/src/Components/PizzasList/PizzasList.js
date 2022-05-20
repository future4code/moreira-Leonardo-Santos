import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest.js";
import baseUrl from '../../constants/baseUrl.js';

const PizzasList = () => {
    const [pizzas, setPizzas] = useState([]);
    const [makeRequest, isLoading] = useRequest();

    const getPizzas = async () => {
        const pizzasFromBase = await makeRequest( "get", `${baseUrl}pizzas`);

        console.log(pizzasFromBase)
        setPizzas(pizzas);
    };

    useEffect(() => {
        getPizzas();
    }, []);

    const mountPizzas = pizzas.map((pizza) => {
        return (
            <li>
                <p>{pizza.name}</p>
                <p>{pizza.price}</p>
            </li>
        );
    });

    return (
        <>
            <h2>Pizzas:</h2>
            <ul>{mountPizzas}</ul>
        </>
    );
};
export default PizzasList;