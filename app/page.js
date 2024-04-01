import Hero from '@/components/homepage/hero/Hero';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

// Feel free to use this updated array in your JavaScript code!

export default function Home() {
  return (
    <div className='wrapper'>
      <Hero />
      <div className='featured'></div>
      <div className='cta'></div>
      <div className='latest'></div>
      <div className='info'></div>
    </div>
  );
}
