import SonyHomepageCard from '../components/sonyPage/SonyHomepageCard';

function Homepage() {
  return (
    <div className='homepage'>
      <h1 className='page-title'>Welcome to BUGbytes!</h1>
      <h1 className='genres'>Genres</h1>
      <ul>
        <li>
          Action
          Adventure
          Strategy
          RPG
          Shooter
          Puzzle
          Racing 
          Sports
        </li>
      </ul>
      <SonyHomepageCard />
    </div>
  );
}

export default Homepage;
