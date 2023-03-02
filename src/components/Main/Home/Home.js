import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const Home = (props) => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
      const getPokemon = async () => {
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
          const data = await resp.json();
          setPokemon(data.results);
          }
          catch(err){
            alert('Not found!')
          }
      
    }
    getPokemon();
  }, []);
  
  return (<section className="home">
        {pokemon.map((pokemon) => (<article>
          <h3 key={uuidv4()}>{pokemon.name}</h3><a href={pokemon.url}>{pokemon.url}</a>
          </article>))}
    </section>);
  }

export default Home
  


