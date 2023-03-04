import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

//import LocalDetail from '../localDetail/localDetail';

const Home = (props) => {
  
  //const [query, setQuery] = useState('')

  const allPokemon = props.allPokemon
  
  /* const handleQuery = () => {
    const query = pokemon.name;
    setQuery(query)
    console.log(query);
  } */

  return (
    <section className="home">
          <section className='localPokemon'>
          {allPokemon.map(poke => <article key={uuidv4()}>
            <h3>{poke.name}</h3>
            <Link to={'/pokemon/'+poke.name}>More Info</Link>
            </article>)}
          </section>
    </section>);
  }

export default Home
