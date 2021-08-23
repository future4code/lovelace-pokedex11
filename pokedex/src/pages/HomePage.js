import React from "react";
import { useHistory } from "react-router-dom";
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
        <button
          onClick={() => {
            goToDetailPage(p.name);
          }}
        >
          {p.name}
        </button>
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
