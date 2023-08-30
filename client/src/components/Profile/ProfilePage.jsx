import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProfileImageUpload from '../ProfileImageUpload';
import { useCurrentUserContext } from "../../context/CurrentUser";

import svenImage from '../../assets/sven.jpg';
import './profileStyle.css';

function ProfilePage() {
  const { currentUser } = useCurrentUserContext();

  const [playLaterCards, setPlayLaterCards] = useState([
    {
      title: 'PLAY LATER CARD 1',
      text: 'Some quick example text for the 1st card.',
      imageSrc: '',
    },
    {
      title: 'PLAY LATER CARD 2',
      text: 'Some quick example text for the 2nd card.',
      imageSrc: '',
    },
    {
      title: 'PLAY LATER CARD 3',
      text: 'Some quick example text for the 3rd card.',
      imageSrc: '',
    },
    {
      title: 'PLAY LATER CARD 4',
      text: 'Some quick example text for the 4th card.',
      imageSrc: '',
    },
    {
      title: 'PLAY LATER CARD 5',
      text: 'Some quick example text for the 5th card.',
      imageSrc: '',
    },
    {
      title: 'PLAY LATER CARD 6',
      text: 'Some quick example text for the 6th card.',
      imageSrc: '',
    },
  ]);

  return (
    <Container>
      <div className='welcome text-center pt-2'>
          <h1>Welcome To Your Profile!</h1>
      </div>
      <ProfileImageUpload />
      <Row>
        <Col md={3}>
          <div>
            <Image src={currentUser.profileImageUrl ?? svenImage} className='profile-image' />
          </div>
        </Col>
        <Col md={8} className='top-five-list'>
          <ListGroup as='ul'>
            <h1>My Top Five Games</h1>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
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
                <Button size='lg' variant='outline-danger'>
                  Check out the game!
                </Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProfilePage;
