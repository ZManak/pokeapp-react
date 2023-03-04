import CardList from './CardList';
import React, { useEffect, useRef, useState } from 'react';


const Input = (props) => {
  const [input, setInput] = useState('');
  const [searchPokemon, setSearchPokemon] = useState([{name: "default" , id: -1, sprites: {front_default: "undefined"}, types: [{ type: { name: "undefined" }},{ type: { name: "undefined" }}]}])
  const inputText = useRef();

  const handleSubmit = () => {
    setTimeout(() => {
      setInput(inputText.current.value)
    }, 4000)
  };

  const clear = () => {
    setSearchPokemon([]);
  }

  useEffect(() => {
    
          const getPokemon = async () => {          
          if (input !== '' && !searchPokemon.some(pokemon => pokemon.name === input)){
          try{
          const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+input);
          const data = await resp.json();
          const arrData = [data, ...searchPokemon];
          props.setPokemon(arrData);
          setSearchPokemon(arrData);
          }
          catch(err){
            console.log("Not found! Looking for locals...")
          }
          
          } 
        }        
        getPokemon()
        // eslint-disable-next-line     
      }, [input]) 

  return (
    <>
    <div>
      <section>
              <h1>Search a Pokemon</h1>
              <input type="text" placeholder='enter a Pokemon...' ref={inputText} onChange={handleSubmit}/>
              <button onClick={clear}>CLEAR</button>
      </section>
              <CardList search={searchPokemon}/>
    </div>
    </>)
};

export default Input;