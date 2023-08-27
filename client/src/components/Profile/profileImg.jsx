// import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import svenImage from '../../assets/sven.jpg';
import './profileStyle.css';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col md={2} className='d-none d-md-block'>
          <Image src={svenImage} className='profile-image' />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
