import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function SingleGame () {
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

            <h1 className='parent-company'>Game Name</h1>
            <div className='game-media'>
                <img src='../assets/sony-buttons-logo.png'/>
            </div>
            <div className='game-info'>
                <h4>Cool game info here...</h4>
            </div>
        </div>
    )
}

export default SingleGame