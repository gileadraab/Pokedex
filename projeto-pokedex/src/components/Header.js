import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListPokemons, goToPokedex } from "../routes/coordinator";
import { ButtonPokedex, ButtonPokemons, ContainerImg, DeletePokedex, NaviBar } from "./StyledHeader";

const Header = () => {
  const navigate = useNavigate();
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const showButton = () => {
    if (window.location.pathname === "/") {
      return (
        <ButtonPokedex onClick={() => goToPokedex(navigate)}>
          Pokedéx
        </ButtonPokedex>
      );
    } else if (window.location.pathname === "/pokedex") {
      return (
        <ButtonPokemons onClick={() => goToListPokemons(navigate)}>
          Todos Pokémons
        </ButtonPokemons>
      );
    }
    else if (window.location.pathname === "/pokedex/detail") {
      return(
        <div>
        <ButtonPokemons onClick={() => goToListPokemons(navigate)}>
          Todos Pokémons
        </ButtonPokemons>
        <DeletePokedex>Excluir da Pokédex</DeletePokedex>
      </div>
      )
    }
  };
  return (
    <NaviBar>
      <ContainerImg>
        <img alt="pokeapi-logo" src={logoImg} />
      {showButton()}
      </ContainerImg>
    </NaviBar>
  );
};
export default Header;
