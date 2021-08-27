import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import UseRequestData from "../hooks/UseRequestData";
import styled from "styled-components";
import { array } from "prop-types";

const ContainerMaior = styled.div`
display: grid;
grid-template-columns:300px 200px 200px 200px;
grid-template-rows:300px;

`
const Poderes = styled.div`
padding: 0%;
background-color: lightsalmon;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
`
const NavImg = styled.div`
display: inline-block;
background-color: lightseagreen;
border: 1px solid black;
width:50vw;
`
const Moves = styled.div`
background-color: lightsalmon;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
`
const Tipo=styled.div`
display: flex;
background-color: lightseagreen;
border: 1px solid black;
align-items: center;
justify-content: space-around;
flex-direction: column;
`
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
    <div>
         <Header />
    <ContainerMaior>

   

      <NavImg>
        {pokemon.name && <h1>{pokemon.name}</h1>}
        <div> {pokemon.sprites && pokemon.sprites.front_default && (
          <img src={pokemon.sprites.front_default} alt="poke" />
        )}</div>

        {pokemon.sprites && pokemon.sprites.back_default && (
          <img src={pokemon.sprites.back_default} alt="poke" />
        )}
      </NavImg>
      
      <Poderes>
      <h2>poderes</h2>
        {pokemon.stats?.map((item) => {
          return (
            <div>
              {item.stat.name}
              {item.base_stat}
            </div>
          )
        })}
      </Poderes>


      <Moves>
        <h2> ataques</h2>
        {pokemon.moves &&
          pokemon.moves.map((move, index) => {
            return (
              index < 5 && <p key={move.move.name}>{move.move.name}</p>
            );
          })}
      </Moves>

      <Tipo>
        <h1>tipo</h1>
    {pokemon.types&&pokemon.types.map((tipo)=>{
      return <div>{tipo.type.name}</div>
    })}
    </Tipo>


    </ContainerMaior>
    <button onClick={goToHome}>voltar</button>
    </div>
  );
};
export default DetailsPage;
