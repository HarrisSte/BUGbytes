// import React from 'react';
import ListGroupWithButtons from '../components/Profile/playLater';
import ImageComponent from '../components/Profile/profileImg';
import TopFiveList from '../components/Profile/topFive';

export default function CombinedPage() {
  return (
    <div className='flex flex-column'>
      <div className='w-1/2 p-6'>
        <ImageComponent />
      </div>
      <div className='w-1/2 p-6'>
        <ListGroupWithButtons />
      </div>
      <div className='w-1/2 p-4'>
        <TopFiveList />
      </div>
    </div>
  );
}
