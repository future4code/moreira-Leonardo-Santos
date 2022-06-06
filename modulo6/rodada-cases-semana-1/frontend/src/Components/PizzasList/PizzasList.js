import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Global/GlobalContext";
import { StyledContainer } from "./style";


const PizzasList = () => {

    const {getPizzas, pizzas, isLoading, addToCart} = useContext(GlobalContext);

    useEffect(() => {
        getPizzas();
    }, []);
    
    const mountPizzas = pizzas.map((pizza) => {
        return (
            <li key={pizza.id}>
                <div onClick={() => addToCart(pizza)}>
                    <p>{pizza.name}</p>
                    <p>{`$${String(pizza.price)}`}</p>
                </div>    
            </li>
        );
    });

    return (
        <>
            <h2>Pizzas:</h2>
            {isLoading ? <h3>Loading...</h3> : <ul>{mountPizzas}</ul>}
        </>
    );
};
export default PizzasList;