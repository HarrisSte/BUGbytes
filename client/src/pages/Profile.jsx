// import React from 'react';
// import ListGroupWithButtons from '../components/Profile/playLater';
import ImageComponent from '../components/Profile/ProfilePage';
// import TopFiveList from '../components/Profile/topFive';
import ProfileBackground from '../assets/profilepage-background.png'

export default function CombinedPage() {
  return (
    < div className='profile-background'
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${ProfileBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden",
    }}
    >
    <div>
      <div>
        <ImageComponent />
      </div>
      {/* <div>
        <ListGroupWithButtons />
      </div>
      <div>
        <TopFiveList />
      </div> */}
    </div>
  </div>
  );
}
