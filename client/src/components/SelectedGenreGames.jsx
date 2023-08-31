import { useEffect, useState } from "react";
const SelectedGenreGames = ({ genreId }) => {
  const [genreGames, setGenreGames] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897&genres=${genreId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGenreGames(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [genreId]);
  
  return (
    <div>
      {genreGames.map((game) => (
        <div
          key={game.slug}
          className="d-flex flex-column align-items-center"
          style={{
            width: "100%",
            margin: "0 5px",
            position: "relative",
          }}
        >
          <a
            href={`/games/${game.slug}`}
            className="btn btn-light"
            style={{
              width: "100%",
              backgroundImage: `url(${game.background_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={game.background_image}
              alt={game.name}
              style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <div
                className="game-title-overlay"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "14px",
                      }}
                      
                  >
                      {game.name}
              </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SelectedGenreGames;
