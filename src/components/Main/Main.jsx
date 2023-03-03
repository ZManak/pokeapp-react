import React, { useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import Input from './Input/Input';
import Home from './Home/Home';
import Create from './Create/Create';
import DetailCard from './DetailCard/DetailCard';

export default function Main() {
  const [apiPokemon, setApiPokemon] = useState([])
  const [localPokemon, setLocalPokemon] = 
  useState([{name:"Aceros", 
            id:666, 
            image: {front_default: "https://img2.freepng.es/20180613/fci/kisspng-crati-stock-pots-clip-art-5b20c4ebad2f25.4084344615288742197094.jpg"},
            types: [{type1: "steel"}, {type2: "poison"}]
            },
            {name:"Pintxo", 
            id:9999, 
            image: {front_default: "https://e7.pngegg.com/pngimages/194/839/png-clipart-pocketknife-advertising-cadeau-publicitaire-ghk-conseil-pocket-knife.png"}, 
            types: [{type1: "fairy"}, {type2: "ghost"}]}])
  
  let { pokeId } = useParams();
  const allPokemon = [...apiPokemon, ...localPokemon]

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home allPokemon={allPokemon} />} />
        <Route path="/new" element={<Create setLocal={setLocalPokemon} localPokemon={localPokemon} />} />
        <Route path="/search" element={<Input setApi={setApiPokemon} allPokemon={allPokemon} />} />
        <Route path={'/pokemon/'}>
          <Route path={":pokeId"} element={<DetailCard setApiPokemon={setApiPokemon} localPokemon={localPokemon} apiPokemon={apiPokemon} pokeId={pokeId} />} />
        </Route>
      </Routes>
    </main>
  )
}

