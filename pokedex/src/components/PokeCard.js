import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import UseRequestData from "../hooks/UseRequestData"

const Card = styled.div`
border: 1px solid #5F8CE8;
width: 200px;
height: 200px;

button{
    margin-bottom: 0px;
    margin-top: 10px;
}


align-items:center;
display: flex;
flex-direction: column;

@media(max-width: 800px) {
    width: 100%
  }

`


export const PokeCard =(props)=>{
    
    
   const list= UseRequestData(props.url,{});
   const history = useHistory()

    const goToDetailPage=(pokemon)=>{
        history.push(`/detalhes/${pokemon}`)
    }
    return(
        <Card>
        {list.sprites && list.sprites.front_default && (
        <img src={list.sprites.front_default} alt="poke" />
      )}
      {list.name}



      <button onClick={()=>{goToDetailPage(list.name)}}>Detalhes</button>

            <button onClick={()=>{props.addCart(list)}}>Adicionar</button>


        </Card>
    )}

export default PokeCard


