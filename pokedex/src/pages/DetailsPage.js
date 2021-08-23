import React from "react";
import { useHistory, useParams } from "react-router-dom";
import UseRequestData from "./hooks/UseRequestData";

const DetailsPage = () => {
  const params = useParams();
  const history = useHistory();
  const pokemon = UseRequestData(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`,
    {}
  );
  const goToHome = () => {
    history.push("/");
  };

  return (
    <>
      <h2>pokemon detail page</h2>

      {pokemon.name && <h1>{pokemon.name}</h1>}
      {pokemon.sprites && pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt="poke" />
      )}

      <button onClick={goToHome}>voltar</button>
    </>
  );
};
export default DetailsPage;
