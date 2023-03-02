import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import { Link } from 'react-router-dom';


//import LocalDetail from '../localDetail/localDetail';

const Home = (props) => {
  const [pokemon, setPokemon] = useState([])
  //const [query, setQuery] = useState('')
  
  const allPokemon = props.allPokemon
  console.log(allPokemon)
  
  /* const handleQuery = () => {
    const query = pokemon.name;
    setQuery(query)
    console.log(query);
  } */

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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section className="home">
          <section className='localPokemon'>
          {props.allPokemon.map(poke => <article>
            <h3 key={uuidv4()}>{poke.name}</h3>
            {/* <Link to={<LocalDetail/>}  data={allPokemon}
            handleQuery={handleQuery}>More Info</Link> */}
            </article>)}
          </section>
          <section className='apiPokemon'>
            {pokemon.map(poke => <article><h3 key={uuidv4()}>{poke.name}</h3>
           {/*  <Link to={<LocalDetail data={allPokemon} />}>More Info</Link> */}
          </article>)}
         </section>
      </section>);
  }

export default Home
  


