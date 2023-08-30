import Results from '../../components/Results';
import { useLocation } from 'react-router-dom';
import ResultsBackground from '../../assets/results-background.png';

const GameResults = () => {
  const location = useLocation();
  const gameResults = location.state.results;

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
        {gameResults.map((game, index) => (
          <Results key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameResults;
