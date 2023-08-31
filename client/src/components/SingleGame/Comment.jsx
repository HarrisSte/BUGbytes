// import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Comment = ({ comment, canDelete }) => {
    console.log("candelete", canDelete);
  return (
    <Card className='game-header'>
        <Card.Title>
            <Row className='align-items-center'>
                <Col xs={2}>
                    <Image src={comment.author.profileImageUrl} roundedCircle style={{ width: '100%' }}  />
                </Col>
                <Col xs={10}>
                    {comment.author.email}
                </Col>
            </Row>
        </Card.Title>
        <Card.Body>
            {comment.commentBody}
        </Card.Body>
        {canDelete && <Button>Delete</Button>}
    </Card>
  );
};

export default Comment;