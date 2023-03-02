import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LocalCard from "../LocalCard/LocalCard";

const LocalDetail = (props) => {
  const [pokemon, setPokemon] = useState([])
  
  const name = useLocation()
  const param = name.pathname.slice(9,)
  console.log("details")
  console.log(param);

  setPokemon(props.data)
  console.log(pokemon)

  
  if (pokemon.some(pokemon => pokemon.name)){ 
    const local = pokemon.filter(name => name === param)
    return (
      <LocalCard local={local}/>
    )
    };
};

export default LocalDetail;
