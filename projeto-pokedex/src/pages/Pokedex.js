import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import {goToDetailPokemon, goToBack} from "../routes/coordinator"
import { CardPokemon, ContainerPokemon, CardButton, CardIdName, Type, ButtonCapturar } from "../components/StyledListPokemons";

function Poquedex() {

  const {pokedex, setPokedex } = useContext(GlobalContext)
  const {capturedPokemons, setCapturedPokemons} = useContext(GlobalContext)
  console.log(pokedex)

  

  const removeFromPokedex = (pokemonId) => {
    let newCapturedPokemons = JSON.parse(JSON.stringify(capturedPokemons))
    let pokedexCopy = pokedex
 
    delete pokedexCopy[pokemonId]    
    setCapturedPokemons(newCapturedPokemons)
    
    localStorage.setItem("pokedex", JSON.stringify(pokedex))
  }

  const myPokemons = Object.keys(pokedex).map((pokemonId) => {
    let detailedPokemonInfo = pokedex[pokemonId]

    return (
      <CardPokemon key={detailedPokemonInfo.id} typePokemon={detailedPokemonInfo.types[0].type.name}>
        <img
          src={detailedPokemonInfo.sprites.other.dream_world.front_default}
          alt="Imagem do pokemon"
        />
        <CardIdName>
          #{detailedPokemonInfo.id}
          <h3>{detailedPokemonInfo.name}</h3>
        </CardIdName>
        <Type typePokemon={detailedPokemonInfo.types[0].type.name}>                      
          {detailedPokemonInfo.types.map((type, index) => {      
            return <div key={index}>{type.type.name}</div>;
          })}
        </Type>
        <CardButton>
          <ButtonCapturar onClick={() => removeFromPokedex(pokemonId)}>
            Remover
          </ButtonCapturar>
        </CardButton>
      </CardPokemon>
    );
  });


  return (
    <div>
      <h1>Meus Pokémons</h1>
      <ContainerPokemon>{myPokemons}</ContainerPokemon>
    </div>
  );
}
export default Poquedex
