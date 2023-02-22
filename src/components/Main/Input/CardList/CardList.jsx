import React from 'react'
import Card from '../Card/Card'


export default function CardList(props) {

  const printCards = () => <section>{props.data.map((pokemon) => <Card data={pokemon} key={Math.random} />)}</section>
  
  return (
    <div>
      {printCards()}
    </div>
  )
}
