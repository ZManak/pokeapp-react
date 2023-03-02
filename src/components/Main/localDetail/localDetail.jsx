import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const LocalDetail = (props) => {
  const [pokemon, setPokemon] = useState([])
  
  const name = useLocation()
  const param = name.pathname.slice(9,)
  console.log(param);

  setPokemon(props.data)

  
  if (pokemon.some(pokemon => pokemon.name)){ 
    const local = pokemon.filter(name => name === param)
    return(
    <section className="localDetail">
      <h1>PokeDetails</h1>
      <article className='apiPokemon'>
      <h3>{local.name}</h3>
      <img src={local.image.front_default} alt={local.name} />
      <p>ID: {local.id}</p>
      <p>Type 1: </p>
      <p>Type 2: </p>
      </article>
    </section>
  )};
};

export default LocalDetail;
