
import React from 'react'

export default function Create(props) {
  //const types = ["Poison", "Steel", "Ghost", "Fairy"]
  const name = React.createRef();
  const id = React.createRef();
  const image = React.createRef();
  const type1 = React.createRef();
  const type2 = React.createRef();

  const handleSubmit = () => {
    
    const newPokemon = {id: id, name: name, image: image, type1: type1, type2:type2}
    props.setPokemons([newPokemon])

  }


  return (
    <section className='createPokemon'>
      <form id='create' onSubmit={handleSubmit}>
        <legend name="id">ID</legend>
        <input name='id' type="number" id="id"/>
        <legend name="name">Name</legend>
        <input name='name' type="text" id="name"/>
        <legend name="image">Image</legend>
        <input name='image' type="text" id="image"/>
        <legend name="type1">Type 1</legend>
        <input type="text" name='type1' />
        <legend name="type2">Type 2</legend>
        <input name='type2' type="text" id="type2"/>
        <br/>
        <input type="submit" value="Create" />
      </form>
    </section>
  )
  }
