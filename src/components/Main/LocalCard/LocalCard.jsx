import React from "react";

const LocalCard = (props) => {
  return(
    <section className="localDetail">
      <h1>PokeDetails</h1>
      <article>
      <h3>{props.local.name}</h3>
      <img src={props.local.image.front_default} alt={props.local.name} />
      <p>ID: {props.local.id}</p>
      <p>Type 1: {props.local.type1}</p>
      <p>Type 2: {props.local.type2}</p>
      </article>
    </section>
  )
};

export default LocalCard;
