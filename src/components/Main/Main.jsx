import React, { useState } from 'react';
import { Routes, Route/* , useParams */ } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';

export default function Main(props) {
  const [pokemon, setPokemon] = useState([{name: undefined, id: undefined, sprites: {front_default: undefined}, types: [{ type: { name: undefined }},{ type: { name: undefined }}]}])
  const [localPokemon, setLocalPokemon] = useState([{name:"aceros",
  id:666,
  sprites: {front_default: "/assets/pokemon/acero.jpg"},
  types: [{ type: { name: "fantasma" }},{ type: { name: "hada" }}]},
  {name:"pintxo", 
  id:9999, 
  sprites: {front_default: "/assets/pokemon/pintxo.png"}, 
  types: [{ type: { name: "Steel" }},{ type: { name: "Poison" }}]}])


  /* let { pokeId } = useParams(); */
  
  const allPokemon = [...localPokemon, ...pokemon.slice(1)]
  
  console.log(pokemon)
  console.log(localPokemon);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home allPokemon={allPokemon} />} />
        <Route path="/new" element={<Create setPokemon={setLocalPokemon} localPokemon={localPokemon} />} />
        <Route path="/search" element={<Input setPokemon={setPokemon} localPokemon={localPokemon} allPokemon={allPokemon}/>} />
        <Route path={'/pokemon/'}>
          <Route path={":pokeId"} element={<DetailCard localPokemon={localPokemon} />} />
        </Route>
      </Routes>
    </main>
  )
}

