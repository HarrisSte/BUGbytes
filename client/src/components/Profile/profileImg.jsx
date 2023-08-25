import { Card } from 'flowbite-react';
import svenImage from '../../assets/sven.jpg';

export default function UserProfileCard() {
  return (
    <div className='relative mt-16 ml-6'>
      <Card className='absolute top-0 left-0 p-4 w-64'>
        <div className='flex flex-col items-center pb-10'>
          <img
            alt='Profile image of user'
            className='mb-3 rounded-full shadow-lg'
            height='100'
            src={svenImage}
            width='100'
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Sven
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            One Handsome Guy!
          </span>
        </div>
      </Card>
    </div>
  );
}
