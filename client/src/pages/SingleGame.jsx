import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GameDetail from '../components/SingleGame/GameDetails';
import SingleGameBackground from '../assets/singlepage-background.png';

const SingleGame = () => {
  const { gameId } = useParams();

  useEffect(() => {
    fetchGame();
  }, []);

  const [game, setGame] = useState([]);

  const fetchGame = async () => {
    await fetch(
      `https://api.rawg.io/api/games/${gameId}?key=bf22dc51e531456db8bc42a19dac9897`
    )
      .then((resp) => resp.json())
      .then((results) => setGame(results));
  };

  return (
    <div
      className='singlegame'
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${SingleGameBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div className='game-info'>
        <GameDetail game={game} />
      </div>
    </div>
  );
};

export default SingleGame;