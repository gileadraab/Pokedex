import styled from "styled-components";
import {
  defineBackgroundColorCard,
  defineBackgroundColor,
} from "./BackgroundPokemons";

export const MainCardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 10px;
    color: white;
    padding: 20px 0;
    text-transform: capitalize;
  }
`;

export const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 30%;
  min-width: 300px;
  height: 210px;
  left: 0px;
  top: 0px;
  /* background: #729f92; */
  background: ${(props) => defineBackgroundColorCard(props.typePokemon)};
  border-radius: 12px;
  margin: 10px;
  img {
    max-width: 150px;
    max-height: 150px;
    position: absolute;
    left: 50%;
    bottom: 45%;
  }
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-top: 15%;
  button {
    width: 80px;
    left: 5%;
    cursor: pointer;
  }
`;
export const ButtonCapturar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  border-radius: 8px;
  border: none;  
`;
export const CardIdName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
  color: white;
  h3 {
    text-transform: capitalize;
  }
`;
export const Type = styled.div`
  display: flex;
  margin: 10px;
  margin-right: 10px;

  div {
    background: ${(props) => defineBackgroundColor(props.typePokemon)};
    margin-right: 10px;
    text-transform: capitalize;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 8px;
    gap: 17px;
    border-radius: 8px;
  }
`;

export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
`;
