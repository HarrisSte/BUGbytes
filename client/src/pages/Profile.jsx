import ImageComponent from '../components/Profile/ProfilePage';
import ProfileBackground from '../assets/profilepage-background.png';

export default function CombinedPage() {
  return (
    <div
      className='profile-background'
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${ProfileBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <div>
          <ImageComponent />
        </div>
      </div>
    </div>
  );
}
