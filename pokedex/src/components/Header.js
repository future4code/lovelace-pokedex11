import React from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
padding: 10px;
justify-content: space-between;
width: 100%;
height: 50px;
background-color: #5F8CE8;

`
export const Header =()=>{
    return(
        <Container>
        <h1>lista de pokemons</h1>
        <button>Carrinho</button>
       </Container>
    )
}

export default Header