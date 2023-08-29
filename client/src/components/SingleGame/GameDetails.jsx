
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

import './SingleGame.css';

const GameHeaderCard = ({ game }) => {
  return (
    <Card className='game-header'>
      <Card.Header>{game.name}</Card.Header>
      <Card.Body>
        <Card.Img src={game.background_image} alt='game image' />
        <h5>Released 📆 </h5> <p>{game.released}</p>
        <h5>Rating 🏆</h5> <p>{game.rating}</p>
        <h5>Platform(s) 🎮 🖥️ 🕹️ </h5>
        <p>
          {game.platforms &&
            game.platforms.length > 0 &&
            game.platforms.map((p, index) => (
              <span key={index}>{p.platform.name} | </span>
            ))}
        </p>
        <div className='save-to-collection-button'>
          <button type='button'>Save to Collection</button>
        </div>
        <div className='save-to-collection-button'>
          <button type='button'>Add To Top Five</button>
        </div>
      </Card.Body>
    </Card>
  );
};

const GameDescriptionCard = ({ game }) => {
  const descriptionContent =
    typeof game.description === 'string' ? game.description : '';

  return (
    <Card className='game-description'>
      <Card.Body>
        <Card.Title>Game Description 📜</Card.Title>
        <Card.Text>{parse(descriptionContent)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const GamePage = (props) => {
  const game = props.game;

  return (
    <Container>
      <Row>
        <Col md={6}>
          <GameHeaderCard game={game} />
        </Col>
        <Col md={6}>
          <GameDescriptionCard game={game} />
        </Col>
      </Row>
    </Container>
  );
};

export default GamePage;
