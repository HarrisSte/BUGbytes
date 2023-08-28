import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Homepage = () => {

  useEffect(() => {
    fetchGames()
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch('https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897')
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <div className='homepage'>
      <h1 className='page-title p-5'>Welcome to BUGbytes!</h1>
      <ul>
        {
          games.map(game => (
            <li key={game.id}>
              <Link to={{
                pathname: `/game/${game.id}`
              }}>
                <h3>{game.name}</h3>
                <img src={game.background_image} alt='screenshot of game'/>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Homepage;
