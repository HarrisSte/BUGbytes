import { useEffect, useState } from 'react';
// import SelectedGenreGames from "./SelectedGenreGames";
import SelectedGenreGames from "../SelectedGenreGames";
import Carousel from 'react-bootstrap/Carousel';
import './gamelist.css';

const GameList = () => {
  const [gamesData, setGamesData] = useState([]);
  const [selectedGenre] = useState(null);

  // const handleGenreClick = (genreId) => {
  //   setSelectedGenre(genreId);
  // };
  

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897&genres?key=bf22dc51e531456db8bc42a19dac9897`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGamesData(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const popularGames = gamesData.slice(0, 3);

  return (
    <div className='carousel'>
      <Carousel interval={3000}>
        {gamesData.slice(0, 25).map((game) => (
          <Carousel.Item key={game.id}>
            <a href={`/game/${game.id}`}>
              <img
                className='game-picture d-block w-100'
                src={game.background_image}
                alt={game.name}
              />
            </a>
            <Carousel.Caption>
              <h3
                className='carousel-captions'
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
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
        className='popular-games-title mt-5 mb-5 text-center'
        style={{
          textDecoration: 'underline',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '900',
        }}
      >
        Most Popular Games
      </h3>
      <div className='popular-games d-flex justify-content-between'>
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
                boxShadow: ' rgba(0, 0, 0, 0.99) 0px -50px 36px -28px inset',
              }}
            >
              <img
                src={game.background_image}
                alt={game.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  margin: '6px 2px',
                }}
              />
              <div
                className='popular-game-title-overlay'
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                {game.name}
              </div>
            </a>
          </div>
        ))}
      </div>
      <h3
        className='games-related mt-5 mb-5 text-center'
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
