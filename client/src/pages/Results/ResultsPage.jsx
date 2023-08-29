import Results from '../../components/Results';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ResultsBackground from '../../assets/results-background.png';

const GameResults = () => {
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
        className='results'
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundImage: `url(${ResultsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
       <div className='game-info'>
        <Results game={game} />
      </div>
      </div>
    );
  };
  
  export default GameResults;