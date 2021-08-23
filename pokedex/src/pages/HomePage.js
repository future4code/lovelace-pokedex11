import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import UseRequestData from "./hooks/UseRequestData";

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
          <li>
        <button
          onClick={() => {
            goToDetailPage(p.name);
          }}
        > detalhe
        </button>
         {p.name}
         </li>
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
