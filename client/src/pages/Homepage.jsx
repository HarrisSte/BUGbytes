// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameList from "../components/GameList";
import GenreList from "../components/GenreList";
// import SelectedGenreGames
//  from "../components/SelectedGenreGames";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="page-title p-5">Welcome to BUGbytes!</h1>

      <div>
        <Container>
          <Row>
            <Col sm={2}>
              {" "}
              <GenreList />
            </Col>
            <Col sm={10}>
              {" "}
              <GameList />
              {/* {selectedGenre && <SelectedGenreGames genreId={selectedGenre} />} */}
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
