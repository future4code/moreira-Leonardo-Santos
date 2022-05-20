import React, { useState } from 'react';
import OrdersList from './Components/OrdersList/OrdersList';
import PizzasList from './Components/PizzasList/PizzasList';

function App() {
  const [currPage, setCurrPage] = useState('home');

  const showPizzas = () => {
    setCurrPage('pizzas');
  };

  const showOrders = () => {
    setCurrPage('orders');
  };

  const pageHandler = () => {
    switch (currPage) {
      case 'pizzas':
        return(
          <PizzasList/>
        );
      case 'orders':
        return(
          <OrdersList/>
        );
    
      default:
        return(
          <>
            <h1>Mama Lelo's Pizza</h1>
            <h2>Bem vinde! faça seu pedido</h2>
          </>
        );
    }
  };

  return (
    <>
      {pageHandler()}
      <div>
        <button type="button" onClick={showPizzas}>Show Pizzas</button>
        <button type="button" onClick={showOrders}>Show Orders</button>  
      </div>     
    </>
  );
}

export default App;