import { useEffect, useState } from "react";
// import SelectedGenreGames from "./SelectedGenreGames";
import SelectedGenreGames from "../components/SelectedGenreGames";


const GameList = () => {
  const [gamesData, setGamesData] = useState([]);
  const [selectedGenre] = useState(null);

  // const handleGenreClick = (genreId) => {
  //   setSelectedGenre(genreId);
  // };

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGamesData(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const popularGames = gamesData.slice(0, 3); // Get the first three games

  

  return (
    <div>
      {/* <h3
        className="mb-5 text-center"
        style={{
          textDecoration: "underline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "46px",
          fontWeight: "900",
        }}
      >
        List Items
      </h3> */}
      <div>
        {gamesData.length > 0 && (
          <div
            key={gamesData[0].id}
            className="d-flex flex-column align-items-center"
            style={{
              width: "100%",
              margin: "0 5px",
              position: "relative",
            }}
          >
            <a
              href={`/game/${gamesData[0].id}`}
              className="btn btn-light"
              style={{
                width: "100%",
                backgroundImage: `url(${gamesData[0].background_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={gamesData[0].background_image}
                alt={gamesData[0].name}
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
                  fontSize: "2rem",
                }}
              >
                {gamesData[0].name}
              </div>
            </a>
          </div>
        )}
        <div style={{ width: "100%" }}></div>
      </div>

      <h3
        className="mt-5 mb-5 text-center"
        style={{
          textDecoration: "underline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "46px",
          fontWeight: "900",
        }}
      >
        {" "}
        Most Popular Games
      </h3>
      <div className="d-flex justify-content-between">
        {popularGames.map((game) => (
          <div
            key={game.id}
            className="d-flex flex-column align-items-center"
            style={{
              width: "100%",
              margin: "0 5px",
              position: "relative",
            }}
          >
            <a
              href={`/game/${game.id}`}
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
      <h3
        className="mt-5 mb-5 text-center"
        style={{
          textDecoration: "underline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "46px",
          fontWeight: "900",
        }}
      >
        {" "}
        Games Related To Selected Genre
      </h3>
      <div>
        {selectedGenre && <SelectedGenreGames genreId={selectedGenre} />}
      </div>
      

      
    </div>
  );
};

export default GameList;
