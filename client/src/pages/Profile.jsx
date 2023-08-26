// import React from 'react';
import ListGroupWithButtons from '../components/Profile/playLater';
import ImageComponent from '../components/Profile/profileImg';
import TopFiveList from '../components/Profile/topFive';

export default function CombinedPage() {
  return (
    <div>
      <div>
        <ImageComponent />
      </div>
      <div>
        <ListGroupWithButtons />
      </div>
      <div>
        <TopFiveList />
      </div>
    </div>
  );
}
