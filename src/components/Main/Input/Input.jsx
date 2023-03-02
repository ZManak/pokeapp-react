import CardList from './CardList/CardList';
import React, { useEffect, useRef, useState } from 'react';


const Input = (props) => {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState([])
  
  const inputText = useRef();

  const handleSubmit = () => {
    setTimeout(() => {
      setInput(inputText.current.value)
      console.log(input);
    }, 4000)
  };

  const clear = () => {
    setPokemon([]);
  }
  console.log (input)
  useEffect(() => {
    
    const getPokemon = async () => {
        if (input !== '' && !pokemon.some(pokemon => pokemon.name === input)){
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+input.current.value);
          const pokemon = await resp.json();
          const pokeList = [...pokemon]
          setPokemon(pokeList);
          console.log(pokemon)
          }
          catch(err){
            alert('Not found!')
          }
      }
    }
    getPokemon();
  }, []);

  return (
    <>
    <div>
      <section>
              <h1>Search a Pokemon</h1>
              <input type="text" placeholder='enter a Pokemon...' ref={inputText} onChange={handleSubmit}/>
              <button onClick={clear}>CLEAR</button>
      </section>
      <CardList  data={pokemon}/> 
    </div>
    </>)
};

export default Input;
