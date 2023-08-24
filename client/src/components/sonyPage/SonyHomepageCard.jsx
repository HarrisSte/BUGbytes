import Image from '../../assets/sony-buttons-logo.png';
import { Card } from 'flowbite-react';
import './sonyHomepage.css';

export default function sonyConsole() {
  return (
    <div className='.m-40 flex justify-center items-center h-screen'>
      <Card
        className='sonyImage'
        imgAlt='Meaningful alt text for an image that is not purely decorative'
        imgSrc={Image}
      >
        <h5 className='text-2xl font-bold tracking-tight text-blue-900 dark:text-white'>
          <p>GAME 1</p>
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          <p>INFO ABOUT GAME HERE</p>
        </p>
      </Card>
      <Card
        className='sonyImage'
        imgAlt='Meaningful alt text for an image that is not purely decorative'
        imgSrc={Image}
      >
        <h5 className='text-2xl font-bold tracking-tight text-blue-900 dark:text-white'>
          <p>GAME 2</p>
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          <p>INFO ABOUT GAME HERE</p>
        </p>
      </Card>
      <Card
        className='sonyImage'
        imgAlt='Meaningful alt text for an image that is not purely decorative'
        imgSrc={Image}
      >
        <h5 className='text-2xl font-bold tracking-tight text-blue-900 dark:text-white'>
          <p>GAME 3</p>
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>
          <p>INFO ABOUT GAME HERE</p>
        </p>
      </Card>
    </div>
  );
}
