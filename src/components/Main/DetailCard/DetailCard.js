import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailCard(props) {
  const apiPokemon = props.apiPokemon;
  const localPokemon = props.localPokemon;
  const [image, setImage] = useState({})


  const name = useLocation()
  const param = name.pathname.slice(9,)

  useEffect(() => {
    console.log(param)
    if(localPokemon.forEach(element => element.name === param)){
      return
    } else {
    const getDetail = async () => {
        try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+param);
        const data = await resp.json();
        props.setPokemon(data)
        setImage(data.sprites)
      }
      catch(err) {
        alert(err)
      }
    }
      getDetail();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } },[])
        
  if(localPokemon.forEach(element => element.name === param)){
  return (<article className='detailCard'>
      <h1>PokeDetails</h1>
      <h3>{localPokemon.name}</h3>
      <img src={image.front_default} alt={localPokemon.name} />
      <p>ID: {localPokemon.id}</p>
      <p>Type 1: {localPokemon.types[0].type.name}</p>
      <p>Type 2: {(localPokemon.types.length > 1) ? localPokemon.types[1].type.name : "none"}</p>
    </article>
    )} else { return ( <article className='detailCard'>
      <h1>PokeDetails</h1>
      <h3>{apiPokemon.name}</h3>
      <img src={image.front_default} alt={apiPokemon.name} />
      <p>ID: {apiPokemon.id}</p>
      <p>Type 1: {apiPokemon.types[0].type.name}</p>
      <p>Type 2: {(apiPokemon.types.length > 1) ? apiPokemon.types[1].type.name : "none"}</p>
    </article>)
}}
