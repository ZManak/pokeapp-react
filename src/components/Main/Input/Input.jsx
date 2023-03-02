import CardList from './CardList/CardList';
import React, { useEffect, useRef, useState } from 'react';


const Input = (props) => {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState([])
  const inputText = useRef();

  const handleSubmit = () => {
    setTimeout(() => {
      setInput(inputText.current.value)
    }, 4000)
  };

  const clear = () => {
    setPokemon([]);
  }



  useEffect(() => {
    
    const getPokemon = async () => {
        if (input !== '' && !pokemon.some(pokemon => pokemon.name === input)){
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+input);
          const data = await resp.json();
          const rawList = [data, ...pokemon]
          setPokemon(rawList);
          }
          catch(err){
            alert('Not found!')
          }
      }
    }
    getPokemon();
  }, [input]);

  return (
    <>
    <div>
      <section>
              <h1>Search a Pokemon</h1>
              <input type="text" placeholder='enter a Pokemon...' ref={inputText} onChange={handleSubmit}/>
              <button onClick={clear}>CLEAR</button>
      </section>
              <CardList query={props.setQuery} data={pokemon}/>
       
    </div>
    </>)
};

export default Input;
