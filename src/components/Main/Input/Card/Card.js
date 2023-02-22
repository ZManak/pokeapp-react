import React from 'react'

export default function Card(props) {
  const image = props.data.sprites
  
  return (
    <>  
    
    <div>
      <h2>{props.data.name}</h2>
      <p>Weight: {props.data.weight}</p>
      <img src={image.front_default} alt={props.data.name} />
     </div>
    
    </>
  )
}
