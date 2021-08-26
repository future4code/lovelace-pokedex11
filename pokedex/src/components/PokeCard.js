import React from "react"
import styled from "styled-components"
import UseRequestData from "../hooks/UseRequestData"
const Card = styled.div`
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

export const PokeCard =(props)=>{
    console.log('props',props.url)
   const list= UseRequestData(props.url, {});
   console.log(list)
    return(
        <Card>
        {list.sprites && list.sprites.front_default && (
        <img src={list.sprites.front_default} alt="poke" />
      )}
      {list.name}
      <button></button>
        </Card>
    )}

export default PokeCard


