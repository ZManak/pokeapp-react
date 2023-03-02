import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const Home = (props) => {
  
  const allPokemon = props.allPokemon
  const handleQuery = () => {
    const query = 
    props.setQuery(query)
    console.log(query);
  }

  useEffect(() => {
      const getPokemon = async () => {
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
          const data = await resp.json();
          props.setPokemon(data.results);
          console.log(allPokemon)
          }
          catch(err){
            alert('Not found!')
          }
    }
    getPokemon();
  }, []);
  
  return (
    <section className="home">
          {allPokemon.map((pokemon) => 
              <article key={pokemon.name}>
                <h3>{pokemon.name}</h3>
                <Link to={`./pokemon/${pokemon.name}`} onClick={handleQuery} >More Info</Link>
          </article>)}
            
    </section>);
  }

export default Home
  


