import React, {useState, useEffect} from "react";
import MainScreen from "./pages/MainScreen/MainScreen.js";
import MatchesScreen from "./pages/MatchesScreen/MatchesScreen.js";
import clear from "./services/clear.js";

const pg = document.querySelector('html');
pg.lang = 'pt-br';
document.title = 'AstroMatch';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const switchPages = () => {
    return currentPage === 'main' ? setCurrentPage('matches') : setCurrentPage('main');
  };
  const clearClick = () => {
    clear();
    alert('Seus matches foram apagados');
    setCurrentPage('main');
  };

  const changePages = () => {
    switch (currentPage) {
      case 'main':
        return (
          <MainScreen
            changePage={switchPages}
            clearClick={clearClick}
          />
        );
    
      default:
        return(
          <MatchesScreen
            changePage={switchPages}
            clearClick={clearClick}
          />
        );
    }
  };

  return (
    <>
      {changePages()}
    </>
  );
};

export default App;