import ListGroup from 'react-bootstrap/ListGroup';

function ProfileTopFiveList() {
  return (
    <ListGroup as='ul'>
      <ListGroup.Item as='li' active>
        My Top Five Games
      </ListGroup.Item>
      <ListGroup.Item as='li'>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as='li' disabled>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item as='li'>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

export default ProfileTopFiveList;
