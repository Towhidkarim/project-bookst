'use client';

import ItemCard from '@/components/ui/item-card';
import ItemCardSkeleton from '@/components/ui/Item-card-skeleton';
import GetListingsAction from '@/lib/actions/GetListingsAction';
import { categories, queryKeys } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export default function BookList() {
  const params = useSearchParams();
  let selectedCategories: (typeof categories)[number][] = [...categories];
  if (params.has('cat') && params.get('cat'))
    selectedCategories = (params
      .get('cat')
      ?.split(',') as (typeof categories)[number][]) ?? [...categories];
  const count = 20;
  const offset = 0;
  const { data: bookData, isLoading } = useQuery({
    queryFn: async () =>
      GetListingsAction({
        status: ['available'],
        category: [...selectedCategories],
        count,
        offset,
      }),
    queryKey: [queryKeys.listings, selectedCategories],
    staleTime: 1000 * 60 * 2,
  });
  return (
    <div className='grid grid-cols-1 place-items-center justify-center gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4'>
      {isLoading ? (
        <>
          {Array.from({ length: 5 }).map((value, index) => (
            <ItemCardSkeleton key={index} />
          ))}
        </>
      ) : (
        <>
          {bookData?.map((value, index) => <ItemCard {...value} key={index} />)}
        </>
      )}
    </div>
  );
}
