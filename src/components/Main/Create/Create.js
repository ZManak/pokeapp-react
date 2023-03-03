
import React from 'react'

export default function Create(props) {
  //const types = ["Poison", "Steel", "Ghost", "Fairy"]
  const name = React.createRef();
  const id = React.createRef();
  const image = React.createRef();
  const type1 = React.createRef();
  const type2 = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar tipos
    const newPokemon = {
      id: id.current.value,
      name: name.current.value,
      image: image.current.value,
      types: [{ type: { name: type1.current.value } }, { type: { name: type2.current.value } }]
    }
    props.setPokemons([newPokemon, ...props.localPokemon])
    alert("Added new Pokelo")
  }


  return (
      <div className='createSite'>
      <section className='createPokemon'>
        <legend name="id">ID *</legend>
        <input name='id' type="number" id="id" ref={id}/>
        <legend name="name">Name *</legend>
        <input name='name' type="text" id="name" ref={name}/>
        <legend name="image">Image *</legend>
        <input name='image' type="text" id="image" ref={image}/>
        <legend name="type1">Type 1 *</legend>
        <select name='type1' ref={type1} required>
          <option value="poison">Poison</option>
          <option value="fight">Fight</option>
          <option value="electric">Electric</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
        </select>
        <legend name="type2">Type 2</legend>
        <select name="type2" ref={type2}>  
          <option value="poison">Poison</option>
          <option value="fight">Fight</option>
          <option value="electric">Electric</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
        </select>
        <button value="Create" onClick={handleSubmit}>CREATE</button>
    </section>
    <section className='rules'>
      <h2>HOUSE RULES</h2>
      <p>Fields marked with (*) are mandatory.</p>
      <p>Name shpuld be at least 3 characters long. (It was close, Mew)</p>
      <p>2nd type cannot be the same as the 1st one</p>
    </section>
    </div>
  )
  }
