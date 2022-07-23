import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import { goToBack, goToListPokemons } from "../routes/coordinator";
import { GlobalContext } from "../global/GlobalContext"

function DetailPokemon() {
  // const navigate = useNavigate();
  const { novaListaPokemon, setNovaListaPokemon } = useContext(GlobalContext);

  const renderLista = novaListaPokemon.map((detalhes) => {
    console.log(detalhes)
    return <div key={detalhes.id}>
      <p>{detalhes.name}</p>
      <img src={detalhes.sprites.front_default} alt="Imagem do pokemon" />

      <div>
        {detalhes.types.map((type, index) => {
          return <div key={index}>{type.type.name}</div>
        })}

      </div>
    </div>

  })


  return (
    <div>
      <h1>Pokemons detalhes</h1>
      {renderLista}
    </div>
  );
}
export default DetailPokemon;
