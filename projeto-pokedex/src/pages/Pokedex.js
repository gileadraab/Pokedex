import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import {goToDetailPokemon, goToBack} from "../routes/coordinator"
import { CardPokemon, ContainerPokemon, CardButton, CardIdName, Type } from "../components/StyledListPokemons";

function Poquedex() {

  const {pokedex, setPokedex } = useContext(GlobalContext)
  console.log(pokedex)

  const navigate = useNavigate()

  const myPokemons = pokedex.map((pokemon) => {
    return (
      <CardPokemon key={pokemon.id} typePokemon={pokemon.types[0].type.name}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="Imagem do pokemon"
        />
        <CardIdName>
          #{pokemon.id}
          <h3>{pokemon.name}</h3>
        </CardIdName>
        <Type typePokemon={pokemon.types[0].type.name}>                      
          {pokemon.types.map((type, index) => {      
            return <div key={index}>{type.type.name}</div>;
          })}
        </Type>
        <CardButton>
          <button onClick={() => goToDetailPokemon(navigate)}>
            Detalhes
          </button>
          <button>
            Remover
          </button>
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
