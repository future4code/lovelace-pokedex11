import React, { useEffect } from "react"
import { useHistory } from "react-router"
import Header from "../components/Header"
import { goHome } from "../routes/cordinator"

export const PokedexPage =(props)=>{

    console.log('props da pokedex',props)

    const history = useHistory()
    return(<>
        <Header/>
       <h1>Pokedex Page</h1>
       {props.cart&&props.cart.map((p)=>{
           <div>carrinho
       {console.log('nome do pokemon',p.name)}
       {p.name}
       
           </div>
       })}
       <button onClick={()=>{goHome(history)}}> comprar mais pokemons</button>
{props.cart.name}
   </>
   
    )
}

export default PokedexPage