import React, { useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';

export default function Main() {
  const [pokemon, setPokemon] = useState([])
  const [localPokemon, setLocalPokemon] = useState([{name:"Aceros", id:"666", image: {front_default: "#"}, type1: "steel", type2: "poison"},{name:"Pintxo", id:"9999", image: {front_default: "#"}, type1: "fairy", type2: "ghost"}])
  //const [pokeId, setpokeId] = useState('')

  let { pokeId } = useParams();
  const allPokemon = [...pokemon, ...localPokemon]

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home setPokemon={setPokemon} allPokemon={allPokemon} />} />
        <Route path="/new" element={<Create setPokemons={setLocalPokemon} localPokemon={localPokemon} />} />
        <Route path="/search" element={<Input setPokemons={setPokemon} /* setQuery={setQuery} allPokemon={allPokemon} */ />} />
        <Route path={'/pokemon/'}>
          <Route path={":pokeId"} element={<DetailCard  pokeId={pokeId} />} />
        </Route>
      </Routes>
    </main>
  )
}

