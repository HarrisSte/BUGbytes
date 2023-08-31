import { Link } from 'react-router-dom';
import './Results.css';

const ResultsCard = ({ game }) => {
  const gameLink = {
    pathname: `/game/${game.id}`,
    gameProps: {
      game: game,
    },
  };

  return (
    <div className='results-card'>
      <Link to={gameLink}>
        <img src={game.background_image} alt='game' />
      </Link>
      <div className='results-card-title'>{game.name}</div>
    </div>
  );
};

export default ResultsCard;