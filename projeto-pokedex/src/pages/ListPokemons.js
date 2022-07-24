import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonCapturar,
  CardButton,
  CardIdName,
  CardPokemon,
  ContainerPokemon,
  MainCardPokemon,
  Type,
} from "../components/StyledListPokemons.js";
import { BASE_URL } from "../constants/BASE_URL";
import { goToDetailPokemon } from "../routes/coordinator";
import { GlobalContext } from "../global/GlobalContext";

function ListPokemons() {
  const navigate = useNavigate();
  const [listPokemons, setListPokemons] = useState([]);

  const {capturedPokemons, setCapturedPokemons} = useContext(GlobalContext)
  const { detailedListPokemon, setDetailedListPokemon } = useContext(GlobalContext);
  const { pokedex, setPokedex } = useContext(GlobalContext);

  // First fetch - Fetch basic pokemon info
  useEffect(() => {
    axios
    .get(`${BASE_URL}pokemon?limit=21&offset=0`)
    .then((response) => {
      setListPokemons(response.data.results);
      console.log("Finished fetching initial pokemon list. Length: " + response.data.results.length)
    }).catch((error) => {
      console.log(error.response)
    });
  }, []);

  // Fetch detailed info for each Pokemon returned in the basic call 
  useEffect(()=> {

    // Don't want this function to run during the first render
    // since listPokemons will be empty
    if (listPokemons.length == 0) return; 
    
    // Map each pokemon from the basic call to a corresponding request for detailed information
    let detailedRequests = listPokemons.map((pokemon) =>
      axios.get(`${BASE_URL}pokemon/${pokemon.name}`)
    )

    // When all the corresponding requests have finished, 
    // store their results in the state
    axios.all(detailedRequests).then(axios.spread((...detailedResponses) => {
      const newListPokemon = {};
      detailedResponses.forEach((detailedResponse) => {
        newListPokemon[detailedResponse.data.id] = detailedResponse.data
      })
      let numberOfResults = Object.keys(newListPokemon).length
      console.log("Finished fetching detailed pokemon list. Length: " + numberOfResults)
      setDetailedListPokemon(newListPokemon)
    })).catch(errors => {
      console.log(errors)
    })
  }, [listPokemons])


  
  const captureOrRemovePokemon = (pokemonId) => {
    // Line parse(stringify(obj)) is a (hacky) way to clone an object
    // Without this, react doesn't realize there's a change to the state
    // And doesn't trigger a rerender  
    let newCapturedPokemons = JSON.parse(JSON.stringify(capturedPokemons))
    let pokedexCopy = pokedex
    console.log(newCapturedPokemons)

    if (pokemonId in newCapturedPokemons) {
      delete newCapturedPokemons[pokemonId]
      delete pokedexCopy[pokemonId]
    } else {
      newCapturedPokemons[pokemonId] = true;
      pokedexCopy[pokemonId] = detailedListPokemon[pokemonId]
    }
    setCapturedPokemons(newCapturedPokemons)


    // ALERT! NOT TESTED
    localStorage.setItem("capturedPokemons", JSON.stringify(newCapturedPokemons))
    localStorage.setItem("pokedex", JSON.stringify(pokedex))

  };

  // Avoid trying to render the cards if the object is not populated 
  // (which will happen in the first render)
  if (Object.keys(detailedListPokemon).length == 0) return null;

  const pokemonCards = Object.keys(detailedListPokemon).map((pokemonId) => {

    let detailedPokemonInfo = detailedListPokemon[pokemonId]
    let isPokemonCaptured = Boolean(pokemonId in capturedPokemons)
    
    return (
      <CardPokemon key={pokemonId} typePokemon={detailedPokemonInfo.types[0].type.name}>
        <img
          src={detailedPokemonInfo.sprites.other.dream_world.front_default}
          alt="Imagem do pokemon"
        />
        <CardIdName>
          <h3>{detailedPokemonInfo.name}</h3>
        </CardIdName>
        <Type typePokemon={detailedPokemonInfo.types[0].type.name}>                      
          {detailedPokemonInfo.types.map((type, index) => {      
            return <div key={index}>{type.type.name}</div>;
          })}
        </Type>
        <CardButton>
          <ButtonCapturar onClick={() => captureOrRemovePokemon(pokemonId)}>
            {isPokemonCaptured ? 'Remover' : 'Capturar'}
          </ButtonCapturar>          

        </CardButton>      
      </CardPokemon>
    )
  })


  return (
    <MainCardPokemon>
      <h1>Lista de Pokemons</h1>
      <ContainerPokemon>{pokemonCards}</ContainerPokemon>
    </MainCardPokemon>
  );
}
export default ListPokemons;


