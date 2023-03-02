import React, { useState } from 'react';
import { Routes, Route, } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([])
  const [localPokemon, setLocalPokemon] = useState([{name:"Aceros", id:"666", image: {front_default: "#"}, type1: "steel", type2: "poison"},{name:"Pintxo", id:"9999", image: {front_default: "#"}, type1: "fairy", type2: "ghost"}])
  const [query, setQuery] = useState('')
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home setPokemon={setPokemon} localPokemon={localPokemon} apiPokemon={pokemon} />} />
        <Route path="/new" element={<Create setPokemons={setLocalPokemon}/>} />
        <Route path="/search" element={<Input setPokemons={setPokemon} setQuery={setQuery} localPokemon={localPokemon} pokemon={pokemon} />} />
        <Route path={`/pokemon/${query}`} element={<DetailCard query={query} localPokemon={localPokemon} />} />
      </Routes>
    </main>
  )
}

