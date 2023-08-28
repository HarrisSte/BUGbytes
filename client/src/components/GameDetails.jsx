const GameDetail = (props) => {
  const game = props.game;

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} width='500' alt='game image' />
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      {/* <h3>Genre(s):</h3>
          { 
            game.genres.map(g => `${g.name} | `)
          }
   */}
      <h3>Platform(s):</h3>
      {game.platforms &&
        game.platforms.length > 0 &&
        game.platforms.map((p) => `${p.platform.name} | `)}
    </div>
  );
};

export default GameDetail;
