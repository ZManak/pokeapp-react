import React, { useEffect, useState } from 'react';
import { Routes, Route, } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([])
  const [localPokemon, setLocalPokemon] = useState([])
  const [query, setQuery] = useState('')

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Create setPokemons={setLocalPokemon}/>} />
        <Route path="/search" element={<Input setPokemons={setPokemon} setQuery={setQuery} pokemon={pokemon} />} />
        <Route path={`/pokemon/${query}`} element={<DetailCard query={query} pokemon={localPokemon} />} />
      </Routes>
    </main>
  )
}

