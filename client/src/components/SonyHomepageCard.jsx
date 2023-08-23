'use client';

import { Card } from 'flowbite-react';
import Image from '../assets/sony-buttons-logo.png';

export default function SonyHomepageCard() {
  return (
    <Card>
      <img width={500} height={500} src={Image} alt='Sony Logo' />
      <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Sony
      </h1>
    </Card>
  );
}
