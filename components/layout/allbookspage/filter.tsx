'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { categories, routes } from '@/lib/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoriesFromParams = searchParams.get('cat');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoriesFromParams?.split(',') ?? [],
  );
  const [priceRange, setPriceRange] = useState(500);

  const addCategoryToFilter = (value: string) => {
    setSelectedCategories((prev) => [...prev, value]);
  };
  const removeCategoryFromFilter = (value: string) => {
    const values = selectedCategories.filter((current) => current !== value);
    setSelectedCategories(values);
  };

  const applyFilter = () => {
    let urlWithParams = '/allbooks?';
    if (selectedCategories.length > 0)
      urlWithParams += `cat=${selectedCategories.join()}`;
    if (priceRange < 500) urlWithParams += `&priceRange=${priceRange}`;
    router.push(urlWithParams);
  };

  return (
    <div className='mx-auto max-w-56'>
      <h1 className='mb-4 w-full rounded-2xl bg-black/90 p-2 text-center text-xl font-medium text-primary-foreground'>
        Filter Books
      </h1>
      <div className='w-full rounded-2xl bg-muted p-5'>
        <div className='flex flex-col items-start justify-center gap-5'>
          <h1 className='font-semibold'>Categories</h1>
          {categories.map((value, index) => (
            <div key={index} className='flex items-center space-x-2'>
              <Checkbox
                checked={selectedCategories.includes(value)}
                id={value}
                onCheckedChange={() => {
                  if (!selectedCategories.includes(value))
                    addCategoryToFilter(value);
                  else removeCategoryFromFilter(value);
                }}
              />
              <label
                htmlFor={value}
                className='cursor-pointer select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {value}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='my-5 w-full rounded-2xl bg-muted p-5'>
        <h1 className='mb-3 font-semibold'>Price Range</h1>
        Under {priceRange}
        <Slider
          className='my-2'
          onValueChange={(value) => setPriceRange(value[0])}
          defaultValue={[500]}
          max={500}
          min={50}
          step={10}
        />
      </div>
      <Button
        onClick={() => applyFilter()}
        className='mb-3 block h-auto w-full rounded-full py-2 text-lg font-semibold'
      >
        Apply Filter
      </Button>
      <Button
        variant='secondary'
        onClick={() => router.push(routes.allBooks)}
        className='block h-auto w-full rounded-full py-2 text-lg font-medium'
      >
        Clear Filter
      </Button>
    </div>
  );
}
