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
  const [captured, setCaptured] = useState({})
  const [capturedPokemons, setCapturedPokemons] = useState([])

  const { detailedListPokemon, setDetailedListPokemon } = useContext(GlobalContext);
  const { pokedex, setPokedex } = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(`${BASE_URL}pokemon?limit=21&offset=0`)
      .then((response) => {
        const newListPokemon = {};
        console.log(response.data.results)
        setListPokemons(response.data.results);
        listPokemons.forEach((pokemon) => {
          axios
            .get(`${BASE_URL}pokemon/${pokemon.name}`)
            .then((response) => {
              newListPokemon[response.data.id] = response.data;
            })
            .catch((error) => {});
            })
            setDetailedListPokemon(newListPokemon)
            console.log("João")
        })

      .catch((error) => {
        console.log(error.response)
      });
  }, []);



  // const getPokemon = (pokemon) => {
  //   const userPokemons = pokedex;
  //   userPokemons.push(pokemon);
  //   setPokedex(userPokemons);

  //   let pokemonInfo = capturedPokemons
  //   pokemonInfo.push(pokemon.name)
  //   setCapturedPokemons(pokemonInfo)

  //   let capturedCopy = captured
  //   capturedCopy[pokemon.name] = true
  //   setCaptured(capturedCopy)

  //   alert("POKEMON CAPTURADO!");

  // };

  const pokemonCards = detailedListPokemon && listPokemons.map((pokemon) => {
    console.log(detailedListPokemon)
    let detailedPokemonInfo = detailedListPokemon[pokemon.id]
  
    return ( 
        <CardPokemon key={pokemon.id} typePokemon={detailedPokemonInfo.types[0].type.name}>

        </CardPokemon>
      )
    }
  )

  return (
    <MainCardPokemon>
      <h1>Lista de Pokemons</h1>
      <ContainerPokemon></ContainerPokemon>
    </MainCardPokemon>
  );
}
export default ListPokemons;


        //   <img
        //     src={detailedPokemonInfo.sprites.other.dream_world.front_default}
        //     alt="Imagem do pokemon"
        //   />
        //   <CardIdName>
        //     <h3>{pokemon.name}</h3>
        //   </CardIdName>
        //   <Type typePokemon={detailedPokemonInfo.types[0].type.name}>                      
        //     {detailedPokemonInfo.types.map((type, index) => {      
        //       return <div key={index}>{type.type.name}</div>;
        //     })}
        //   </Type>
        //   <CardButton>
        //     <ButtonCapturar onClick={() => goToDetailPokemon(navigate)}>
        //       Detalhes
        //     </ButtonCapturar>
        //   </CardButton>