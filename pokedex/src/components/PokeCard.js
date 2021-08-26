import React from "react"
import styled from "styled-components"
import UseRequestData from "../hooks/UseRequestData"

const Card = styled.div`
border: 1px solid #5F8CE8;
width: 200px;
height: 200px;
margin-left: 10px;
align-items:center;
justify-content: center

`

const Button = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    margin-top: 100%;
    align-items: center;

`

export const PokeCard =(props)=>{
    console.log('props',props.url)
   const list= UseRequestData(props.url, {});
   console.log("list",list)
    return(
        <Card>
        {list.sprites && list.sprites.front_default && (
        <img src={list.sprites.front_default} alt="poke" />
      )}
      {list.name}
            <Button>
            <button>Detalhes</button>
            <button>Adicionar</button>
            </Button>

        </Card>
    )}

export default PokeCard


