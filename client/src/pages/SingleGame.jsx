import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GameDetail from '../components/GameDetails';

const SingleGame = () => {

    const {gameId} = useParams()

    useEffect(() => {
        fetchGame()
      }, []);
    
      const [game, setGame] = useState([]);
    
      const fetchGame = async () => {
        await fetch(`https://api.rawg.io/api/games/${gameId}?key=bf22dc51e531456db8bc42a19dac9897`)
        .then(resp => resp.json())
        .then(results => setGame(results))
      }

    return (
        <div className='singlegame'>
            <div className='homepage-button-singlegame'>
                <Link to="/">Homepage</Link>
            </div>
            <div className='profile-button-singlegame'>
                <Link to="/profile">Profile</Link>
            </div>

            <div className='save-to-collection-button'>
                <button type='button'>Save to Collection</button>
            </div>

            <div className='game-info'>
                <GameDetail game={game}/>
            </div>
        </div>
    )
}

export default SingleGame