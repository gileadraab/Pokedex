import React, { useState } from "react";
//import useRequestData from "../../hooks/useRequestData";

import { GlobalContext } from "../global/GlobalContext";

export default function GlobalState(props) {
  const [detailedListPokemon, setDetailedListPokemon] = useState({});
  const [pokedex, setPokedex] = useState([])

    const values = {
    detailedListPokemon,
    setDetailedListPokemon,
    pokedex,
    setPokedex
  };

  const Provider = GlobalContext.Provider;

  return <Provider value={values}>{props.children}</Provider>;
}
