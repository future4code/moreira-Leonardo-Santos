import React, { useState } from "react";
import GlobalContext from "./GlobalContext.js";
import useRequest from "../hooks/useRequest.js";
import baseUrl from "../constants/baseUrl.js";
import PizzasList from "../Components/PizzasList/PizzasList.js";
import OrdersList from "../Components/OrdersList/OrdersList.js";
import Cart from "../Components/Cart/Cart.js";
import { StyledContainer, StyledWrap } from "../Components/PizzasList/style.js";

const GlobalState = (props) => {
    const [orders, setOrders] = useState([]);
    const [makeRequest, isLoading] = useRequest();
    const [pizzas, setPizzas] = useState([]);
    const [currPage, setCurrPage] = useState('home');
    const [cart, setCart] = useState([]);
    const [totalValue,  setTotalValue] = useState(0);

    const sendOrders = async (orders) => {
       
        orders.forEach( async (order) => {
            const body = {
                pizza: order.name,
                quantity: order.quantity
            };

            await makeRequest('post', `${baseUrl}orders`, body);

        });

        setCart([]);
        setTotalValue(0);
    };

    const removeFromCart = (itemToRemove) => {
        if (itemToRemove.quantity === 1) {
            const newCart = cart.filter((item) => {
                if (item.id !== itemToRemove.id) {
                    return item;
                }
                else {
                    const newValue = totalValue - itemToRemove.price;
                    setTotalValue(newValue);
                    return false;
                }
            }); 
            setCart(newCart);
        }
        else {
            const newCart = cart.map((item) => {
                if (itemToRemove.id === item.id && item.quantity >= 1) {
                    const newValue = totalValue - itemToRemove.price;
                    setTotalValue(newValue);
                    return {...item, quantity: item.quantity - 1};
                } 
                else {
                    return item;
                }
            });
            setCart(newCart);
        }
    };

    const getTotalValue = (value) => {
        let newValue = totalValue + value;
        setTotalValue(newValue);
    };

    const addToCart = (pizza) => {
        const pizzaInCart = cart.filter((item) => {
            if (item.id === pizza.id) {
                return item;
            }
        });

        if (pizzaInCart.length === 0) {
            pizza.quantity = 1;
            const newCart = [...cart, pizza];
            setCart(newCart);
        }
        else {
            const newCart = cart.map((item) => {
                if (pizza.id === item.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                else {
                    return item;
                }
            });

            setCart(newCart);
        }
        getTotalValue(pizza.price);
    };

    const showPizzas = () => {
        setCurrPage('pizzas');
    };

    const showOrders = () => {
      setCurrPage('orders');
    };

    const goToHome = () => {
        setCurrPage('home');
    };

    const pageHandler = () => {
      switch (currPage) {
        case 'pizzas':
          return(
            <StyledWrap>
                <PizzasList/>
                <Cart/>
            </StyledWrap> 
          );
        case 'orders':
          return(
            <OrdersList/>
          );
            
        default:
          return(
            <StyledContainer>
              <h2>Bem vinde! faça seu pedido</h2>
            </StyledContainer>
          );
      }
    };
    
    const getPizzas = async () => {
        const pizzasFromBase = await makeRequest( "get", `${baseUrl}pizzas`);
        
        setPizzas(pizzasFromBase);
    };
  
    const getOrders = async () => {
        const ordersFromBase = await makeRequest( "get", `${baseUrl}orders`);
      
        setOrders(ordersFromBase);
    };

    const value = {orders, getOrders, isLoading, pizzas, getPizzas, showPizzas, showOrders, goToHome, pageHandler, addToCart, cart, totalValue, removeFromCart, sendOrders};

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
};
export default GlobalState;
