import React, {useState, useEffect} from "react";
import MainScreen from "./pages/MainScreen/MainScreen.js";
import MatchesScreen from "./pages/MatchesScreen/MatchesScreen.js";

const pg = document.querySelector('html');
pg.lang = 'pt-br';
document.title = 'AstroMatch';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const switchPages = () => {
    return currentPage === 'main' ? setCurrentPage('matches') : setCurrentPage('main');
  };

  const changePages = () => {
    switch (currentPage) {
      case 'main':
        return (
          <MainScreen
            changePage={switchPages}
          />
        );
    
      default:
        return(
          <MatchesScreen
            changePage={switchPages}
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