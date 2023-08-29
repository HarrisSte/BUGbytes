import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';

const GamePage = (props) => {
  const game = props.game;

  const descriptionContent =
    typeof game.description === 'string' ? game.description : '';

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>{game.name}</h1>
          <img
            src={game.background_image}
            className='img-fluid'
            alt='game image'
          />
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <h3
                style={{
                  fontSize: '1.2rem',
                  color: 'black',
                  background: '#F8B44Eff',
                  padding: '1rem',
                }}
              >
                Released: {game.released}
              </h3>
              <h3
                style={{
                  fontSize: '1.2rem',
                  color: 'black',
                  background: '#F8B44Eff',
                  padding: '1rem',
                }}
              >
                Rating: {game.rating}
              </h3>
              <h3>Platform(s):</h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'black',
                  background: '#F8B44Eff',
                  padding: '1rem',
                }}
              >
                {game.platforms &&
                  game.platforms.length > 0 &&
                  game.platforms.map((p, index) => (
                    <span key={index}>{p.platform.name} | </span>
                  ))}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Game Description</h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'black',
                  background: '#F8B44Eff',
                  padding: '1rem',
                }}
              >
                {parse(descriptionContent)}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GamePage;
