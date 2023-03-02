import React from "react";

const LocalDetail = (props) => {

  return(
    <section className="localDetail">
      <h1>PokeDetails</h1>
      <article className='apiPokemon'>
      <h3>{props.newPokemon.name}</h3>
      <img src={props.newPokemon.image.front_default} alt={props.newPokemon.name} />
      <p>ID: {props.newPokemon.id}</p>
      <p>Type 1: </p>
      <p>Type 2: </p>
      </article>
    </section>
  );
};

export default LocalDetail;
