import React from "react";
import { useHistory } from "react-router-dom";
import UseRequestData from "../hooks/UseRequestData";
import PokeCard from "../components/PokeCard";
import Header from "../components/Header";

import styled from "styled-components"



const Container = styled.div`
display:grid;
grid-template-columns:  1fr 1fr 1fr 1fr;
grid-template-rows:1fr 1fr 1fr 1fr ;
align-itens: center;



@media(max-width: 800px) {
  
  grid-template-columns: 50% 50%;
  grid-template-rows:1fr 1fr 1fr 1fr ;
}

`


const HomePage= (props) => {
  console.log('props da home',props)

  const pokemonList = UseRequestData("https://pokeapi.co/api/v2/pokemon", {});
  const history = useHistory();


   const lista = pokemonList.results?.map((p) => {
      return (
          <PokeCard  addCart={props.addCart}url={p.url}/>
      );
    }); 

  return (

    <>

  <Header cart={props}/>

    <Container>
    
      {lista} 
     

    </Container>
</>
  );
};


export default HomePage;
