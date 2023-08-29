import { useEffect, useState } from 'react';
// import SelectedGenreGames from "./SelectedGenreGames";
import SelectedGenreGames from '../components/SelectedGenreGames';

import Carousel from 'react-bootstrap/Carousel';

const GameList = () => {
  const [gamesData, setGamesData] = useState([]);
  const [selectedGenre] = useState(null);

  // const handleGenreClick = (genreId) => {
  //   setSelectedGenre(genreId);
  // };

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGamesData(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const popularGames = gamesData.slice(0, 3); // Get the first three games

  return (
    <div>
      <Carousel interval={2000}>
        {' '}
        {gamesData.slice(0, 25).map((game) => (
          <Carousel.Item key={game.id}>
            <a href={`/game/${game.id}`}>
              <img
                className='d-block w-100'
                style={{
                  borderRadius: '2rem',
                }}
                src={game.background_image}
                alt={game.name}
              />
            </a>
            <Carousel.Caption>
              <h3
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '2rem',
                }}
              >
                {game.name}
              </h3>
              <p>{game.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3
        className='mt-5 mb-5 text-center'
        style={{
          textDecoration: 'underline',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '46px',
          fontWeight: '900',
        }}
      >
        {' '}
        Most Popular Games
      </h3>
      <div className='d-flex justify-content-between'>
        {popularGames.map((game) => (
          <div
            key={game.id}
            className='d-flex flex-column align-items-center'
            style={{
              width: '100%',
              margin: '0 5px',
              position: 'relative',
            }}
          >
            <a
              href={`/game/${game.id}`}
              className='btn btn-light'
              style={{
                width: '100%',
                backgroundColor: '#2485C3',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                overflow: 'hidden',
              }}
            >
              <img
                src={game.background_image}
                alt={game.name}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div
                className='game-title-overlay'
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '14px',
                }}
              >
                {game.name}
              </div>
            </a>
          </div>
        ))}
      </div>
      <h3
        className='mt-5 mb-5 text-center'
        style={{
          textDecoration: 'underline',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '46px',
          fontWeight: '900',
        }}
      >
        {' '}
        Games Related To Selected Genre
      </h3>
      <div>
        {selectedGenre && <SelectedGenreGames genreId={selectedGenre} />}
      </div>
    </div>
  );
};

export default GameList;
