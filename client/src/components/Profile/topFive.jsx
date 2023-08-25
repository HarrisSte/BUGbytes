import { Carousel } from 'flowbite-react';
import './topFive.css';

export default function GameCarousel() {
  return (
    <Carousel>
      <a 
        href='https://your-link-1.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className=''
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
        />
      </a>
      <a
        href='https://your-link-2.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
        />
      </a>
      <a
        href='https://your-link-3.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
        />
      </a>
      <a
        href='https://your-link-4.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
        />
      </a>
      <a
        href='https://your-link-5.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
        />
      </a>
    </Carousel>
  );
}
