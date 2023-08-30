import { Link } from 'react-router-dom';

const Results = ({ game }) => {
  return (
    <div className='results-container'>
      {
        <div>
          <Link
            to={{
              pathname: `/game/${game.id}`,
              gameProps: {
                game: game,
              },
            }}
          >
            <h3>{game.name}</h3>
            <img src={game.background_image} alt='game' />
          </Link>
        </div>
      }
    </div>
  );
};

export default Results;
