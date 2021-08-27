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
}

`
const Button = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    margin-top: 100%;
    align-items: center;

`
export const PokeCard =(props)=>{
    
   const list= UseRequestData(props.url, {});
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
            <button>Adicionar</button>

        </Card>
    )}

export default PokeCard


