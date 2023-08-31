import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImageUpload from '../ProfileImageUpload/ProfileImageUpload';
import { useCurrentUserContext } from '../../context/CurrentUser';

import svenImage from '../../assets/sven.jpg';
import './profileStyle.css';

function ProfilePage() {
  const { currentUser } = useCurrentUserContext();
  const [username, setUsername] = useState('');

  // console.log(currentUser);

  useEffect(() => {
    if (currentUser.isAuthenticated) {
      setUsername(currentUser.username);
    }
  }, [currentUser]);

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
        <h1>Welcome To Your Profile, {currentUser.firstName}!</h1>
      </div>
      <Row className='profile-image-row d-flex flex-column align-items-center'>
        <Col md={2.5}>
          <div>
            <Image
              src={currentUser.profileImageUrl ?? svenImage}
              className='profile-image'
            />
          </div>
        </Col>
      </Row>
      <ProfileImageUpload/>
      <Row>
        {playLaterCards.map((card, index) => (
          <Col key={index} xs={12} md={4} className='play-later-card'>
            <Card
            style={{ backgroundColor: '#343a40' }}
            >
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title className='profile-card-title'>{card.title}</Card.Title>
                <Card.Text className='profile-card-text' style={{ color: 'white' }}>{card.text}</Card.Text>
                <Button size='lg' variant='outline-success'>
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
