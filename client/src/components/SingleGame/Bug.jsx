/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client";
import { ADD_COMMENT } from "../../graphql/mutations";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCurrentUserContext } from "../../context/CurrentUser";
import Comment from './Comment';

const Bug = ({bug}) => {
  const { currentUser } = useCurrentUserContext();
  const [bugComment, setBugComment] = useState('');
  const [comments, setComments] = useState(bug.comments || []);
  const [addComment] = useMutation(ADD_COMMENT, {
    onCompleted(data) {
      setComments([...comments, data.addComment]);
    }
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setBugComment(value);
  };

  const handleCommentSubmit = async (event) => {
    await addComment({
      variables: {
        comment: {
          bugId: bug._id,
          commentBody: bugComment
        }
      },
    });

    setBugComment('')
  };

  return (
    <Card className='game-header'>
      <Card.Title>{bug.author}</Card.Title>
      <Card.Body>
        {bug.text}
        <Row className='align-items-center mb-2 mt-3'>
          <Col xs={10}>
            <input id={"commentInput"} type="text" onChange={handleChange} value={bugComment}></input>
          </Col>
          <Col xs={2}>
            <Button variant="primary" onClick={handleCommentSubmit}>Post</Button>{' '}
          </Col>
        </Row>

        {bug && comments.map((c, i) => (
            // eslint-disable-next-line react/jsx-key
            <div >
              <Comment key={c.commentId} comment={c} canDelete={currentUser._id == c.author._id} bugId={bug._id}/>
            </div>
        ))}
        
      </Card.Body>
    </Card>
  );
};


export default Bug;