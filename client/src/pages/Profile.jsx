import { Avatar } from 'flowbite-react';

export default function DefaultAvatar() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Avatar
        alt='avatar of Jese'
        img='/images/people/profile-picture-5.jpg'
        rounded
      />
      <Avatar img='../assets/profileImg.jpg' />
    </div>
  );
}
