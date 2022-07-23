import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import {goToDetailPokemon, goToBack} from "../routes/coordinator"
import { CardPokemon, ContainerPokemon, CardButton, CardIdName, Type } from "../components/StyledListPokemons";

function Poquedex() {

  // const {pokedex, setPokedex } = useContext(GlobalContext)
  // console.log(pokedex)

  const navigate = useNavigate()


  const {detailedListPokemon, setDetailedListPokemon} = useContext(GlobalContext);
  let capturedPokemonsLocalStorage = localStorage.getItem("capturedPokemons") ? JSON.parse(localStorage.getItem("capturedPokemons")) : {}


  const [capturedPokemons, setCapturedPokemons] = useState(capturedPokemonsLocalStorage)

  console.log(capturedPokemons)
  console.log(Object.keys(capturedPokemons))
  const myPokemons = Object.keys(capturedPokemons).map((pokemonId) => {
  
    let detailedPokemonInfo = detailedListPokemon[Number(pokemonId)]

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
{/*          <button onClick={() => goToDetailPokemon(navigate)}>
            Detalhes
          </button>
          <button>
            Remover
          </button>
*/}        </CardButton>
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
