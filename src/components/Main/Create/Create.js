
import React from 'react'

export default function Create(props) {
  //const types = ["Poison", "Steel", "Ghost", "Fairy"]
  const name = React.createRef();
  const id = React.createRef();
  const image = React.createRef();
  const type1 = React.createRef();
  const type2 = React.createRef();

  const handleSubmit = () => {
    //e.preventDefault();
    //Validar tipos
    const newPokemon = {
      id: id.current.value,
      name: name.current.value,
      image: image.current.value,
      types: [{ type: { name: type1.current.value } }, { type: { name: type2.current.value } }]
    }
    props.setPokemon([newPokemon, ...props.localPokemon])
    alert("Added new Pokelo")
  }


  return (
    <section className='createPokemon'>
        <legend name="id">ID</legend>
        <input name='id' type="number" id="id" ref={id}/>
        <legend name="name">Name</legend>
        <input name='name' type="text" id="name" ref={name}/>
        <legend name="image">Image</legend>
        <input name='image' type="text" id="image" ref={image}/>
        <legend name="type1">Type 1</legend>
        <select name='type1' ref={type1} >
          <option value="poison">Poison</option>
        </select>
        <legend name="type2">Type 2</legend>
        <input name='type2' type="text" id="type2" ref={type2}/>
        <br/>
        <button value="Create" onClick={handleSubmit}>CREATE</button>
    </section>
  )
  }
