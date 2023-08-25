import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import GameDetail from '../components/GameDetails';

const SingleGame = () => {

    useEffect(() => {
        fetchGames()
      }, []);
    
      const [games, setGames] = useState([]);
    
      const fetchGames = () => {
        fetch('https://api.rawg.io/api/games/{id}?key=bf22dc51e531456db8bc42a19dac9897')
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
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

            <h1 className='parent-company'>{games.name}</h1>
            <div className='game-media'>
                <img src='../assets/sony-buttons-logo.png'/>
            </div>
            <div className='game-info'>
                <GameDetail />
            </div>
        </div>
    )
}

export default SingleGame