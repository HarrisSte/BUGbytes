import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileImageUpload from '../ProfileImageUpload/ProfileImageUpload';
import { useCurrentUserContext } from '../../context/CurrentUser';
import RDR2 from '../../assets/playlater/rdr2.jpg';
import Horizon from '../../assets/playlater/horizon.jpg';
import SeaOfThieves from '../../assets/playlater/Sea-of-Thieves.jpg';
import Journey from '../../assets/playlater/journey.jpg';
import DeepRock from '../../assets/playlater/DRG.jpg';
import Stardew from '../../assets/playlater/stardew.jpg';

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
      title: 'Red Dead Redemption 2',
      text: 'Some quick example text for the 1st card.',
      imageSrc: RDR2,
    },
    {
      title: 'Horizon: Forbidden West',
      text: 'Some quick example text for the 2nd card.',
      imageSrc: Horizon,
    },
    {
      title: 'Sea of Thieves',
      text: 'Some quick example text for the 3rd card.',
      imageSrc: SeaOfThieves,
    },
    {
      title: 'Journey to the Savage Planet',
      text: 'Some quick example text for the 4th card.',
      imageSrc: Journey,
    },
    {
      title: 'Deep Rock Galactic',
      text: 'Some quick example text for the 5th card.',
      imageSrc: DeepRock,
    },
    {
      title: 'Stardew Valley',
      text: 'Some quick example text for the 6th card.',
      imageSrc: Stardew,
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
      <Row className='profile-cards'>
        {playLaterCards.map((card, index) => (
          <Col key={index} xs={12} md={4} className='play-later-card'>
            <Card
            style={{ backgroundColor: '#343a40' }}
            >
              <Card.Img className='play-later-image' variant='top' src={card.imageSrc} />
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