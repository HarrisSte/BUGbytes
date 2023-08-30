import ResultsCard from '../../components/SearchResults/Results';
import { useLocation } from 'react-router-dom';
import ResultsBackground from '../../assets/results-background.png';
import '../../components/SearchResults/Results.css';

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
      <div className='game-info grid-container'>
        {gameResults.map((game, index) => (
          <ResultsCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameResults;
