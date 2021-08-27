import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react"
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";
import DetailsPage from "../pages/DetailsPage";
import ErrorPage from "../pages/ErrorPage"

export const Router=()=>{

    const [cart,setCart]= useState([])

    const addCart=(product)=>{
        const newProduct = { ...product, quantity: 1 }
        const newCart = [...cart, newProduct]
        setCart(newCart)
      }
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
            <HomePage addCart={addCart}/>
            </Route>
            <Route exact path={"/pokedex"}>
                <PokedexPage cart={cart}/>
            </Route>
            <Route exact path={"/detalhes/:pokemon"}>
            <DetailsPage/>
            </Route>
        
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}