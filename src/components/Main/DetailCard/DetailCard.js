import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailCard(props) {
  const [pokemon, setPokemon] = useState({name: "", id: -1, sprites: {front_default: ""}, types: [{ type: { name: "" }},{ type: { name: "" }}]})
  
  const [image, setImage] = useState({sprites: {front_default:''}})
  const [loading, setLoading] = useState(true)

  const loc = useLocation()
  const param = loc.pathname.slice(9,)

  console.log(props.localPokemon.some(poke => poke.name === param));
  console.log(props.localPokemon.filter(poke => poke.name === param));

  //const local = props.localPokemon.filter(poke => poke.name === param)          
  
  useEffect(() => {
          
          const getPokemon = async () => {
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+param);
          const data = await resp.json();
          console.log(data)
          setPokemon(data)
          setImage(data.sprites)
          setLoading(false)  
          }          
          catch(err) {
            console.log("Not found! Looking for locals...")
          }
        }      
        getPokemon()
        
        // eslint-disable-next-line     
    }, [])

  //if(arrNew === [undefined, undefined]) {
  return (
      loading ? "cargando" : <article className='detailCard'>
      <h1>PokeDetails</h1>
      <h3>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h3>
      <img src={image?.front_default} alt={pokemon?.name} />
      <p>ID: {pokemon?.id}</p>
      <p>Type 1: {pokemon.types[0].type.name}</p>
      <p>Type 2: {(pokemon?.types.length > 1) ? pokemon.types[1].type.name : "none"}</p>
    </article>
    )
  }    