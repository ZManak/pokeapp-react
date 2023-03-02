
import React from 'react'
export default function Create(props) {

  return (
    <section className='createPokemon'>
      <form onSubmit={props.setPokemons()}>
        <legend name="id">ID</legend>
        <input name='id' type="text" id="id"/>
        <legend name="name">Name</legend>
        <input name='name' type="text" id="name"/>
        <legend name="image">Image</legend>
        <input name='image' type="text" id="image"/>
        <legend name="typeOne">Type 1</legend>
        <input name='typeOne' type="text" id="typeOne"/>
        <legend name="typeTwo">Type 2</legend>
        <input name='typeTwo' type="text" id="typeTwo"/>
        <br/>
        <input type="submit" value="Create" />
      </form>
    </section>
  )
}
