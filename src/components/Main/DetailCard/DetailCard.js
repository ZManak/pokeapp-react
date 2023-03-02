import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailCard(props) {
  const [pokemon, setPokemon] = useState('')
  const [image, setImage] = useState({})
  
  
  const name = useLocation()
  const param = name.pathname.slice(9,)
  
  

  useEffect(() => {
    console.log(param)
    const getDetail = async () => {
        try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+param);
        const data = await resp.json();
        setPokemon(data)
        setImage(data.sprites)
      }
      catch(err) {
        alert(err)
      }}
      getDetail();
    },    
  [])
  
  //if(arrNew === [undefined, undefined]) {
    return (<article className='detailCard'>
      <h1>PokeDetails</h1>
      <h3>{pokemon.name}</h3>
      <img src={image.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Type 1: </p>
      <p>Type 2: </p>
    </article>  
  ) 
}
