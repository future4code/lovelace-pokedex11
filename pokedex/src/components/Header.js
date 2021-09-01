import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import { goPokedex } from "../routes/cordinator";

const Container = styled.div`
display: flex;
align-items: center;
padding: 10px;
justify-content: space-around;
width: 100%;
height: 50px;
background-color: #5F8CE8;




@media(max-width: 800px) {
  width: 100%;
  

}

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