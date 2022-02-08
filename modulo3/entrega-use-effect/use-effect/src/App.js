import React, {useState, useEffect} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard.js";
import {Div} from './style.js';

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState('');

  const page = document.querySelector('html');
  page.lang = 'pt-br';
  document.title = 'Labe-Dex';

  const changePokeName = (evt) =>{
    setPokeName(evt.target.value);
  };

  const getPokeList = async () => {
    try { 
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");

      setPokeList(response.data.results);
    }
    catch(err) {
      console.log(err.response)
    };
  };

  useEffect(() => {
    getPokeList();
  }, []);

  return (
    <Div>
        <select onChange={changePokeName}>

          <option value={""}>Nenhum</option>

          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </Div>
  );
}

export default App;
