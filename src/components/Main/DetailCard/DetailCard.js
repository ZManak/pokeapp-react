import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailCard(props) {
  const [pokemon, setPokemon] = useState({name: "d", id: -1, sprites: {front_default: "d"}, types: [{ type: { name: "d" }},{ type: { name: "d" }}]})
  const [loading, setLoading] = useState(true)

  const loc = useLocation()
  const param = loc.pathname.slice(9,)

  console.log(props.localPokemon.some(poke => poke.name === param));
  console.log(props.localPokemon.filter(poke => poke.name === param));

  const removeProperties = (obj, properties) => {
    properties.forEach(prop => delete obj[prop])
  }

  const setLocal = () =>  setPokemon((props.localPokemon.filter(poke => poke.name === param))[0])

  useEffect(() => {
          if (props.localPokemon.some(poke => poke.name === param)){
            setLocal()
            setLoading(false)
            return
          } else {
          const getPokemon = async () => {
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+param);
          const data = await resp.json();
          removeProperties(data, ["abilities", "base_experience", "forms", "game_indices"]);
          setPokemon(data)
          setLoading(false)  
          }          
          catch(err) {
            console.log("Not found! Looking for locals...")
          }
        }
           
        getPokemon()}   
    }, [])

  //if(arrNew === [undefined, undefined]) {
  return (
      loading ? "cargando" : <article className='detailCard'>
      <h1>PokeDetails</h1>
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Type 1: {pokemon.types[0].type.name}</p>
      <p>Type 2: {(pokemon.types.length > 1) ? pokemon.types[1].type.name : "none"}</p>
    </article>
    )
  }    