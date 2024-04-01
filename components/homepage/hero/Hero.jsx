import React from 'react';
import styles from './hero.module.scss';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MdSearch } from 'react-icons/md';

const Hero = () => {
  const bikeBrands = [
    'yamaha',
    'honda',
    'suzuki',
    'hero',
    'tvs',
    'bajaj',
    'lifan',
    'runner',
    'ktm',
    'gpx',
  ];

  const budgets = [
    { value: '50000', title: 'Under 50,000' },
    { value: '100000', title: 'Under 1 Lakh' },
    { value: '150000', title: 'Under 1.5 Lakh' },
    { value: '200000', title: 'Under 2 Lakh' },
    { value: '300000', title: 'Under 3 Lakh' },
    { value: '400000', title: 'Under 4 Lakh' },
    { value: '500000', title: 'Under 5 Lakh' },
    { value: '599999', title: 'Above 5 Lakh' },
  ];

  return (
    <div className={styles.hero}>
      <h1>Bike arot</h1>
      <h2>buy or sell bikes with confidence</h2>

      <div className={styles.formContainer}>
        <h4>Find your future bike</h4>
        <form>
          <Input
            type='text'
            placeholder='Bike name ex: Yamaha FZS'
            name='name'
          />

          <Select>
            <SelectTrigger className='text-gray-500'>
              <SelectValue placeholder='Select Favorite Brand' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {bikeBrands.map((brand, index) => (
                  <SelectItem value={brand} key={index}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className='text-gray-500'>
              <SelectValue placeholder='Select your budget' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {budgets.map((item) => (
                  <SelectItem key={item.title} value={item.value}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button type='submit'>
            <MdSearch className='mr-2' /> Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
