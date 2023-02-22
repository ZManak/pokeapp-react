import CardList from './CardList/CardList';
import React, { useEffect, useRef, useState } from 'react';

const Input = () => {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const inputText = useRef();
  
  const handleSubmit = () => {
    setTimeout(() => {
      setInput(inputText.current.value)
    }, 4000)
  };

  const clear = () => {
    setPokemon([]);
    inputText = '';
  }

  useEffect(() => {
    
    const getPokemon = async () => {
        if (input !== '') {
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+input);
          const data = await resp.json();
          setPokemon([data, ...pokemon]);
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
              <CardList data={pokemon}/>
       
    </div>
    </>)
};

export default Input;
