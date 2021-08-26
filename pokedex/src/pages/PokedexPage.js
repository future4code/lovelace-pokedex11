import React from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { goHome } from "../routes/cordinator"

export const PokedexPage =()=>{
    const history = useHistory()
    return(<>
        <Header/>
       <h1>Pokedex Page</h1>
       <button onClick={()=>{goHome(history)}}> comprar mais pokemons</button>
   </>
   
    )
}

export default PokedexPage