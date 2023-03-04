import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';


//import LocalDetail from '../localDetail/localDetail';

const Home = (props) => {
  
  //const [query, setQuery] = useState('')

  const allPokemon = props.allPokemon
  
  return (
    <section className="home">
          {allPokemon.map(poke => <article className='homeCard' key={uuidv4()}>
            <h2>{poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}</h2>
            <img src={poke.sprites.front_default} alt={poke.name}/>
            <Link to={'/pokemon/'+poke.name}><AwesomeButton type='secondary'>More Info</AwesomeButton></Link>
            </article>)}
    </section>);
  }

export default Home
