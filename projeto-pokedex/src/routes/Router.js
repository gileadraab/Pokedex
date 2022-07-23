import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPokemons from "../pages/ListPokemons";
import Pokedex from "../pages/Pokedex";
import DetailPokemon from "../pages/DetailPokemon";
import Header from "../components/Header";


export const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<ListPokemons />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/detail" element={<DetailPokemon />} />        
      </Routes>
    </BrowserRouter>
  );
};
