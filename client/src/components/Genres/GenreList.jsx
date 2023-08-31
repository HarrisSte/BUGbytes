import { useEffect, useState } from "react";
import SelectedGenreGames from "../SelectedGenreGames";
import {Link} from "react-router-dom"
import './genre.css'

const GenreList = () => {
  const [genreData, setGenreData] = useState([]);
    const [ selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
      setSelectedGenre(genreId);
      window.history.pushState(null, null, `/genres/${genreId}`);
  };

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=bf22dc51e531456db8bc42a19dac9897`)
      .then((res) => res.json())
      .then((data) => {
        setGenreData(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center" >
      <h3
        className="genre-title mb-4 text-center"
        style={{
          textDecoration: "underline",
          fontWeight: "900",

        }}
      >
        Genres
      </h3>
      <div className=" flex mb-5 d-flex flex-column align-items-center">
        {genreData.map((genre) => (
          <div
            key={genre.id}
            className="genres d-flex flex-column align-items-center"
            style={{
              width: "100%",
              margin: "5px",
              position: "relative",
              marginBottom: '8px'
            }}
            >
            <Link
              href={`/${genre.id}`}
              className="btn btn-light"
              style={{
                width: "100%",
                backgroundColor: "#2485C3",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:' rgba(0, 0, 0, 0.99) 0px -50px 36px -28px inset'
              }} 
              onClick={() => handleGenreClick(genre.id)}
            >
              <img
                src={genre.image_background}
                alt={genre.name}
                style={{ maxWidth: "100%", height: "auto", borderRadius: "15px"}}
              />
              <div
                className="genre-title-overlay"
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "18px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {genre.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      {selectedGenre && <SelectedGenreGames genreId={selectedGenre} />}
    </div>
  );
};

export default GenreList;
