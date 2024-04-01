import Features from '@/components/homepage/features/Features';
import Hero from '@/components/homepage/hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='wrapper'>
      <Hero />
      <Features />
      <div className='featured'></div>
      <div className='latest'></div>
      <div className='info'></div>
    </div>
  );
}
