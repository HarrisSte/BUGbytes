import { Card } from 'flowbite-react';

export default function singleGame() {
  return (
    <Card className='max-w-sm' href='#'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        <p>Noteworthy technology acquisitions 2021</p>
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
      </p>
    </Card>
  );
}