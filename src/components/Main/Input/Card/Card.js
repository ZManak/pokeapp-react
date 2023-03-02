import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const image = props.data.sprites
  
  const handleQuery = () => {
    const query = props.data.name;
    props.setQuery(query)
    console.log(query);
  }

  return (
    <>  
    
    <div>
      <h2>{props.data.name}</h2>
      <img src={image.front_default} alt={props.data.name} />
      <br/>
      <Link to={`/pokemon/${props.data.name}`} data={props} onClick={handleQuery}>More Info</Link>
     </div>
    
    </>
  )
}
