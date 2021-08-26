import React from "react";
import { useHistory } from "react-router-dom";
import UseRequestData from "../hooks/UseRequestData";
import PokeCard from "../components/PokeCard";
import Header from "../components/Header";


const HomePage= () => {
  const pokemonList = UseRequestData("https://pokeapi.co/api/v2/pokemon", {});
  const history = useHistory();

/*    const goToDetailPage = () => {
    history.push(`/pokedex`);
  }; */

   const lista = pokemonList.results?.map((p) => {
      return (
          <PokeCard url={p.url}/>
      );
    }); 

  return (
    <>

  <Header/>
     {/*  <button onClick={goToDetailPage}>detalhes</button> */}
      {lista} 

     
    

    </>
  );
};
export default HomePage;
