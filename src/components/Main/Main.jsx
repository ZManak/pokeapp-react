import React, { useState } from 'react';
import { Routes, Route/* , useParams */ } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';



export default function Main(props) {
  const [pokemon, setPokemon] = useState([{name: "", id: -1, sprites: {front_default: ""}, types: [{ type: { name: "" }},{ type: { name: "" }}]}])
  const [localPokemon, setLocalPokemon] = useState([{name:"Aceros",
  id:666,
  sprites: {front_default: "#"},
  types: [{ type: { name: "fantasma" }},{ type: { name: "hada" }}]},
  {name:"Pintxo", 
  id:9999, 
  sprites: {front_default: "#"}, 
  types: [{ type: { name: "cortante" }},{ type: { name: "veneno" }}]}])


  /* let { pokeId } = useParams(); */
  
  const allPokemon = [...localPokemon, ...pokemon]
  
  console.log(pokemon)
  console.log(localPokemon);
  console.log(allPokemon)
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

