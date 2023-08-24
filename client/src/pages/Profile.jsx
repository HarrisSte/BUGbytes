function Profile() {
  return (
    <div className='profile-page'>
      <h1 className="page-title">Profile</h1>

      <div className='player-image'>
        <img src='../assets/sven.jpg'/>
      </div>

      <div className='bug-squashes'>
        <h1>My Bug Squashes</h1>
      </div>

      <div className='top-five-games'>
        <ol>
          <li>
            1. Red Dead Redemption
            2. Deep Rock Galactic
            3. Horizon Forbidden West
            4. Journey to the Savage Planet 
            5. Sea of Thieves
          </li>
        </ol>
      </div>

      <div className='game-library'>
        <h1>Game Library</h1>
        <ol>
          <li>
            1. Red Dead Redemption
            2. Deep Rock Galactic
            3. Horizon Forbidden West
            4. Journey to the Savage Planet 
            5. Sea of Thieves
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Profile