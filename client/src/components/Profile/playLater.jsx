import { ListGroup } from 'flowbite-react';
import './playLater.css';

export default function ListGroupWithButtons() {
  return (
    <ListGroup>
      <ListGroup.Item active onClick={() => alert('Profile clicked!')}>
        <p className='custom-item'>Games I Wanna Play Later</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p className='gameList'>Game One</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p className='gameList'>Game Two</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p className='gameList'>Game Three</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p className='gameList'>Game Four</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p className='gameList'>Game Five</p>
      </ListGroup.Item>
    </ListGroup>
  );
}
