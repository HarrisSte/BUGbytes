'use client';

import { Card } from 'flowbite-react';
import Image from '../assets/sony-buttons-logo.png';

export default function SonyHomepageCard() {
  return (
    <Card renderImage={() => {<Image width={1000} height={1000} src="../assets/sony-buttons-logo.png" />}}>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Sony
      </h1>
    </Card>
  )
}