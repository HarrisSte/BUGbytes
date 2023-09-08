import React from 'react';
import { useMutation, gql } from "@apollo/client";
import { REMOVE_COMMENT } from "../../graphql/mutations";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Comment = ({ comment, canDelete, bugId }) => {
  const [removeComment] = useMutation(REMOVE_COMMENT, {
    // onCompleted(data) {
    //   setComments([...comments, data.addComment]);
    // }
  });
  const handleCommentRemove = async () => {
    await removeComment({
      variables: {
        bugId: bugId,
        commentId: comment.commentId
      },
    });
  };

  return (
    <Card className='game-header'>
          <Card.Title>
              <Container>
            <Row className='align-items-center'>
                <Col xs={2}>
                    <Image src={comment.author.profileImageUrl} roundedCircle style={{ width: '100%' }}  />
                </Col>
                <Col xs={10}>
                    {comment.author.email}
                </Col>
                  </Row>
                  </Container>
        </Card.Title>
        <Card.Body>
            {comment.commentBody}
        </Card.Body>
        {canDelete && <Button onClick={handleCommentRemove}>Delete</Button>}
    </Card>
  );
};

export default Comment;