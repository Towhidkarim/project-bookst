'use client';
import ItemCard from '@/components/ui/item-card';
import ItemCardSkeleton from '@/components/ui/Item-card-skeleton';
import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';
import GetListingsAction from '@/lib/actions/GetListingsAction';
import { categories } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

import React from 'react';

export default function Recents() {
  const { data: bookData, isLoading } = useQuery({
    queryFn: async () =>
      GetListingsAction({
        status: ['available'],
        category: [...categories],
        count: 4,
        offset: 0,
      }),
    queryKey: ['recents'],
    staleTime: 1000 * 60 * 2,
  });

  return (
    <section className='my-30'>
      <div className='container mx-auto overflow-hidden px-5 md:max-w-[80svw]'>
        <h1 className='text-lg font-bold'>Recently Added</h1>
        <hr className='my-2 max-w-24 rounded-xl border-muted bg-gray-300 p-1' />
        <br />
        <ScrollArea className='w-full'>
          <div className='my-5 flex flex-row items-center justify-start gap-12 px-5'>
            {bookData && (
              <>
                {bookData.map((item, index) => (
                  <ItemCard key={index} {...item} />
                ))}
              </>
            )}

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
