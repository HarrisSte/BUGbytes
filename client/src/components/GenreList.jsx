import { useEffect, useState } from "react";
// import SelectedGenreGames from "../components/SelectedGenreGames";
import {Link} from "react-router-dom"

const GenreList = () => {
  const [genreData, setGenreData] = useState([]);
    const [ setSelectedGenre ] = useState(null);

  const handleGenreClick = (genreId) => {
      setSelectedGenre(genreId);
      window.history.pushState(null, null, `/genre/${genreId}`);
  };

  useEffect(() => {
    fetch("https://api.rawg.io/api/genres?key=bf22dc51e531456db8bc42a19dac9897")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGenreData(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h3
        className=" mb-5 text-center"
        style={{
          textDecoration: "underline",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "46px",
          fontWeight: "900",
        }}
      >
        {" "}
        Genre{" "}
      </h3>
      <div className=" mb-5">
        {/* Your code snippet */}
        {genreData.map((genre) => (
          <div
            key={genre.id}
            className="d-flex flex-column align-items-center"
            style={{
              width: "100%",
              margin: "0 5px",
              position: "relative",
            }}
            >
                {/* <button
              className="btn btn-light"
              style={{
                width: "100%",
                backgroundImage: `url(${genre.image_background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
              }} */}
            <Link
              href={`/genres/${genre.id}`}
              className="btn btn-light"
              style={{
                width: "100%",
                backgroundImage: `url(${genre.image_background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
              }} 
              onClick={() => handleGenreClick(genre.id)}
            >
              <img
                src={genre.image_background}
                alt={genre.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div
                className="genre-title-overlay"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "10px",
                }}
              >
                {genre.name}
              </div>
            </Link>
          </div>
        ))}
        {/* <div style={{ width: "100%" }}></div> */}
      </div>
      {/* {selectedGenre && <SelectedGenreGames genreId={selectedGenre} />} */}
    </div>
  );
};

export default GenreList;
