import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import svenImage from '../../assets/sven.jpg';
import './profileStyle.css';

function ProfilePage() {
  const playLaterCards = [
    {
      title: 'PLAY LATER CARD 1',
      text: 'Some quick example text for the first card.',
    },
    {
      title: 'PLAY LATER CARD 2',
      text: 'Some quick example text for the second card.',
    },
    {
      title: 'PLAY LATER CARD 3',
      text: 'Some quick example text for the third card.',
    },
    {
      title: 'PLAY LATER CARD 4',
      text: 'Some quick example text for the fourth card.',
    },
    {
      title: 'PLAY LATER CARD 5',
      text: 'Some quick example text for the fifth card.',
    },
  ];

  return (
    <Container>
      <Row>
        <Col md={5} >
          <Image src={svenImage} className='profile-image' />
          <div>
            <h1>WELCOME</h1>
          </div>
        </Col>
        <Col xs={12} md={4} className='top-five-list'>
          <ListGroup as='ul'>
            <ListGroup.Item as='li' active>
              <h1>My Top Five Games</h1>
            </ListGroup.Item>
            <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item as='li'>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        
      </Row>
      <Row>
        {playLaterCards.map((card, index) => (
          <Col key={index} xs={12} md={4} className='play-later-card'>
            <Card>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProfilePage;
