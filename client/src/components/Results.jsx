import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Results = (props) => {

  const { gameId } = useParams();

  return (
    <div className="results-container">
      <ul>
      {
        props.gameResults.map(game => (
          <li key={game.id}>

            <Link to={{
              pathname: `/game/${gameId}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
            
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default Results;

// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import ResultsPage from '../pages/Results/ResultsPage'
// import ResultsBackground from '../assets/results-background.png'

// const Results = () => {

//   const { gameId } = useParams();

//   useEffect(() => {
//     fetchGame();
//   }, []);

//   const [game, setGame] = useState([]);

//   const fetchGame = async () => {
//     await fetch(
//       `https://api.rawg.io/api/games/${gameId}?key=bf22dc51e531456db8bc42a19dac9897`
//     )
//       .then((resp) => resp.json())
//       .then((results) => setGame(results));
//   };

//   return (
//     <div
//       className='results'
//       style={{
//         width: '100%',
//         minHeight: '100vh',
//         backgroundImage: `url(${ResultsBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         overflow: 'hidden',
//       }}
//     >
//       <div className='results-info'>
//         <ResultsPage game={game} />
//       </div>
//     </div>
//   );
// }

// export default Results;