import { Link } from 'react-router-dom';

function GamesPage () {
    return (
        <div className='gamespage'>
            <div className='homepage-button-gamespage'>
                <Link to="/">Homepage</Link>
            </div>
            <div className='profile-button-gamespage'>
                <Link to="/profile">Profile</Link>
            </div>

            <div className='filter-gamespage'>
                <button type='button'>Filter</button>
            </div>

            <h1 className='parent-company'>Sony</h1>
            <h2 className='console'>PlayStation 5</h2>
        </div>
    )
}

export default GamesPage