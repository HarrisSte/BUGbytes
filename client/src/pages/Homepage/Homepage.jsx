// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GameList from "../../components/GameList/GameList";
import GenreList from "../../components/Genres/GenreList";
// import SelectedGenreGames
//  from "../components/SelectedGenreGames";
import HomepageBackground from "../../assets/homepage-background.png";
import './homepage.css'

const Homepage = () => {
  return (
    <div className="homepage"
              style={{
                width: "100%",
                backgroundImage: `url(${HomepageBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
      >
      <h1 className="page-title p-5">Welcome to BUGbytes!</h1>

      <div className='main-games'>
        <Container fluid>
          <Row>
            <Col sm={2}>
              {" "}
              <GenreList />
            </Col>
            <Col sm={8}>
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
