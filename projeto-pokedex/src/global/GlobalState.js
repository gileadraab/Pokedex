import React, { useState, useEffect } from "react";
//import useRequestData from "../../hooks/useRequestData";

import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
  const [detailedListPokemon, setDetailedListPokemon] = useState({});
  const [pokedex, setPokedex] = useState({})
  const [capturedPokemons, setCapturedPokemons] = useState({})

    const values = {
    detailedListPokemon,
    setDetailedListPokemon,
    pokedex,
    setPokedex,
    capturedPokemons,
    setCapturedPokemons
  };

  useEffect(()=> {
    const localStoragePokedex = localStorage.getItem("pokedex")
    const parsedLocalStorage = JSON.parse(localStoragePokedex)
    parsedLocalStorage && setPokedex(parsedLocalStorage)
  }, [])

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
