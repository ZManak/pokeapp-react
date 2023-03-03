import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


//import LocalDetail from '../localDetail/localDetail';

const Home = (props) => {
  const [pokemon, setPokemon] = useState([])
  //const [query, setQuery] = useState('')
  
  const allPokemon = props.allPokemon
  console.log(allPokemon)
  
  const {pokeId} = useParams()
  
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
            <Link to='/pokemon/:pokeID' data={allPokemon} pokeId={pokeId}>More Info</Link>
            </article>)}
          </section>
          </section>);
  }

export default Home
  


