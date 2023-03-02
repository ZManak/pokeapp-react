import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import LocalDetail from '../localDetail/localDetail';



const Home = (props) => {
  const [pokemon, setPokemon] = useState([])
  
  const newPokemons = props.localPokemon
  console.log("homenews");
  console.log(newPokemons);
  
  useEffect(() => {
      const getPokemon = async () => {
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
          const data = await resp.json();
          setPokemon(data.results);
          console.log(pokemon)
          }
          catch(err){
            alert('Not found!')
          }
    }
    getPokemon();
  }, []);
  
  return (<section className="home">
          {/* <article className='localPokemon'>
            {props.localPokemon.forEach((element, i) => {
              <LocalDetail newPokemon={element} key={i} />}) } 
          </article> */}
          <article className='apiPokemon'>
            {pokemon.map(poke => <article><h3 key={uuidv4()}>{poke.name}</h3>
            <a href={poke.url}>{poke.url}</a></article>)}
          </article>
    </section>);
  }

export default Home
  


