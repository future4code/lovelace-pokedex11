import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import UseRequestData from "../hooks/UseRequestData";
import styled from "styled-components";
import { array } from "prop-types";

const ContainerMaior=styled.div`
/*  grid-template-columns: 1fr 1fr;
 grid-template-rows:1fr; */

`
const NavPower=styled.div`
background-color: lightsalmon;
border: 1px solid black;
width:50vw;
`
const NavImg=styled.div`
display: inline-block;
background-color: lightseagreen;
border: 1px solid black;
width:50vw;
`
const ContainerHeader =styled.div`
grid-column-start:1;
grid-column-end:3;

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

  const poderes=pokemon.stats?.map((item)=>{  
    return(
      <NavPower>     
        {item.stat.name}-
        {item.base_stat}
      </NavPower> 
         )  
  })

  const ataques=pokemon.moves?.filter((item)=>{  
 while (pokemon.moves.length<5){
   return console.log('item',item)
 }
    return(
      console.log('tamanho',pokemon.moves.length)  
         )  
  })
  return (
    <ContainerMaior>
      <ContainerHeader>
  <Header/>
  </ContainerHeader>
  <NavImg>
      {pokemon.name && <h1>{pokemon.name}</h1>}
      <div> {pokemon.sprites && pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt="poke" />
      )}</div>

       {pokemon.sprites && pokemon.sprites.back_default && (
        <img src={pokemon.sprites.back_default} alt="poke" />
      )}
</NavImg>
        <h4>poderes: {poderes}</h4>
       
        
        <button onClick={goToHome}>voltar</button>

    </ContainerMaior>
  );
};
export default DetailsPage;
