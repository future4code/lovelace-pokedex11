import React from "react";
import { useHistory } from "react-router-dom";
import UseRequestData from "../hooks/UseRequestData";
import PokeCard from "../components/PokeCard";
import Header from "../components/Header";

import styled from "styled-components"



const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;


`


const HomePage= () => {
  const pokemonList = UseRequestData("https://pokeapi.co/api/v2/pokemon", {});
  const history = useHistory();


   const lista = pokemonList.results?.map((p) => {
      return (
          <PokeCard url={p.url}/>
      );
    }); 

  return (

    <>

  <Header/>

    <Container>
    
      {lista} 
     

    </Container>
</>
  );
};


export default HomePage;
