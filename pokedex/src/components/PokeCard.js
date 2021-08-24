import React from "react"
import styled from "styled-components"

const Card = styled.div`
display: grid;
grid-template: column;

border: 1px solid black;
width: 200px;
height: 200px;
margin-left: 10px;

`

const Button = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    margin-top: 90%;

`

export const PokeCard =()=>{
    return(
        <Card>
        <Button>
        <button>Adicionar</button>
        <button>Ver detalhes</button>
        </Button>
        </Card>
    )}

export default PokeCard


