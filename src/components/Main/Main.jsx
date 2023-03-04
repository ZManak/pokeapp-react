import React, { useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';



export default function Main(props) {
  const [pokemon, setPokemon] = useState([{name: undefined, id: undefined, sprites: {front_default: undefined}, types: [{ type: { name: undefined }},{ type: { name: undefined }}]}])

  const [localPokemon, setLocalPokemon] = useState([{name:"Aceros",
  id:666,
  image: {front_default: "#"},
  types: [{ type: { name: "fantasma" }},{ type: { name: "hada" }}]},
  {name:"Pintxo", 
  id:9999, 
  image: {front_default: "#"}, 
  types: [{ type: { name: "cortante" }},{ type: { name: "veneno" }}]}])


  let { pokeId } = useParams();
  
  const allPokemon = [...pokemon, ...localPokemon]
  
  console.log(pokemon)
  console.log(localPokemon);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home allPokemon={allPokemon} />} />
        <Route path="/new" element={<Create setPokemon={setLocalPokemon} localPokemon={localPokemon} />} />
        <Route path="/search" element={<Input setPokemon={setPokemon} localPokemon={localPokemon}/>} />
        <Route path={'/pokemon/'}>
          <Route path={":pokeId"} element={<DetailCard  pokeId={pokeId} />} />
        </Route>
      </Routes>
    </main>
  )
}

