import React, { useContext } from 'react';
import GlobalContext from './Global/GlobalContext';
import { StyledFixed, StyledMain } from './style';

function App() {
  const {showPizzas, showOrders, pageHandler, goToHome} = useContext(GlobalContext);

  return (
    <StyledMain>
      <StyledFixed>
        <h1 onClick={goToHome}>Mama Lelo's <span>🍕</span></h1>

        <button type="button" onClick={showPizzas}>Show Pizzas</button>
        <button type="button" onClick={showOrders}>Show Orders</button>  
      </StyledFixed>     
      {pageHandler()}
    </StyledMain>
  );
}

export default App;