import React from "react";
import { useHistory } from "react-router-dom";
import UseRequestData from "../hooks/UseRequestData";
import PokeCard from "../components/PokeCard";













const HomePage= () => {
  const pokemonList = UseRequestData("https://pokeapi.co/api/v2/pokemon", {});
  const history = useHistory();

  const goToDetailPage = (name) => {
    history.push(`/detalhes/${name}`);
  };

   const lista =
    pokemonList.results &&
    pokemonList.results.map((p) => {
      return (
          <PokeCard>
               <img src={p.url} alt="poke" /> 
            {console.log(p.name)}
        <button
          onClick={() => {
            goToDetailPage(p.name);

          }}
        >detail
        </button>
    <strong>{p.name}</strong>
        </PokeCard>
      );
    }); 

  return (
    <>
      <h1>pokemon list page</h1>
      {lista} 

     
    

    </>
  );
};
export default HomePage;
