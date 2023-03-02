import React from 'react'
import Card from '../Card/Card'
import { v4 as uuidv4 } from 'uuid';

export default function CardList(props) {

  const printCards = () => <section>{props.data.map((pokemon) => <Card setQuery={props.query} data={pokemon} key={uuidv4} />)}</section>
  
  return (
    <div>
      {printCards()}
    </div>
  )
}
