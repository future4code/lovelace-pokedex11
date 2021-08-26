import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import { goPokedex } from "../routes/cordinator";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
border: 1px solid black;
width: 100%;
height:80px;
`
export const Header =()=>{
    const history = useHistory();
    console.log(history)


    /* const goToDetailPage = () => {
        history.push(`/pokedex`);
      };  */


    return(
        <Container>
        <h1>lista de pokemons</h1>
          <button onClick={()=>{goPokedex(history)}}>pokedex</button> 
       </Container>
    )
}


export default Header