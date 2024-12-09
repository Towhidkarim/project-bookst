'use client';
import React, { useRef } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const searchValue = useRef('');
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?query=${searchValue.current}`);
      }}
      className='flex flex-col gap-3 md:flex-row md:gap-0'
    >
      <Input
        onChange={(e) => (searchValue.current = e.target.value)}
        placeholder='Enter search query'
        min={3}
        required
        className='rounded-2xl bg-muted md:w-72 md:rounded-r-none'
      />
      <Button
        type='submit'
        className='flex items-center justify-center gap-2 rounded-2xl md:rounded-l-none'
      >
        <Search />
        Search
      </Button>
    </form>
  );
}
