import React from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
padding: 10px;
border: 1px solid black;
width: 100%;
height: 50px;

`
export const Header =()=>{
    return(
        <Container>
        <h1>lista de pokemons</h1>
       </Container>
    )
}

export default Header