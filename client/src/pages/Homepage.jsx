import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Homepage = () => {
  useEffect(() => {
    fetchGames();
  }, []);

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    fetch("https://api.rawg.io/api/games?key=bf22dc51e531456db8bc42a19dac9897")
      .then((resp) => resp.json())
      .then(({ results }) => setGames(results));
  };

  return (
    <div className="homepage">
      <h1 className="page-title p-5">Welcome to BUGbytes!</h1>
      <Container>
        <Row>
          <Col sm={2}>
            Genres
            <div>
              {games.map((game) => (
                <div key={game.id}>
                  <Image
                    src={game.background_image}
                    fluid
                    style={{ width: "100%" }}
                    alt="screenshot of game"
                  />

                  <h3>{game.name}</h3>
                  <Link
                    to={{
                      pathname: `/game/${game.id}`,
                    }}
                  >
                    {/* <h3>{game.name}</h3>
              <img src={game.background_image} alt="screenshot of game" /> */}
                  </Link>
                </div>
              ))}
            </div>{" "}
          </Col>
          <Col sm={10}>
            List of games
            <div>
              {games.map((game) => (
                <div key={game.id}>
                  <Image
                    src={game.background_image}
                    fluid
                    style={{ width: "100%" }}
                    alt="screenshot of game"
                  />

                  <h3>{game.name}</h3>

                  <Link
                    to={{
                      pathname: `/game/${game.id}`,
                    }}
                  >
                    {/* <h3>{game.name}</h3>
              <img src={game.background_image} alt="screenshot of game" /> */}
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
