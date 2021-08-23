import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react"
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";
import DetailsPage from "../pages/DetailsPage";
import ErrorPage from "../pages/ErrorPage"

export const Router=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
            <HomePage/>
            </Route>
            <Route exact path={"/pokedex"}>
                <PokedexPage/>
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