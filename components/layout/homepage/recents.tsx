import ItemCard from '@/components/ui/item-card';
import ItemCardSkeleton from '@/components/ui/Item-card-skeleton';
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';

import React from 'react';

export default function Recents() {
  return (
    <section className='my-30'>
      <div className='container mx-auto overflow-hidden px-5 md:max-w-[80svw]'>
        <h1 className='text-lg font-bold'>Recently Added</h1>
        <hr className='my-2 max-w-24 rounded-xl border-muted bg-gray-300 p-1' />
        <br />
        <ScrollArea className='w-full'>
          <div className='my-5 flex flex-row items-center justify-start gap-12 px-5'>
            <ItemCardSkeleton />
            <ItemCardSkeleton />
            <ItemCardSkeleton />

            {/* {categories.map((value, index) => (
          <div
          key={index}
          className='my-2 flex h-28 w-36 flex-col items-center justify-center gap-2 rounded-xl bg-muted text-lg font-semibold text-primary ring-primary transition-all hover:ring-2'
          >
          {icons[index]}
          {value}
          </div>
          ))} */}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>
    </section>
  );
}
