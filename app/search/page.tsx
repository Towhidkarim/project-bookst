import ItemCard from '@/components/ui/item-card';
import { db } from '@/lib/db';
import { listingTable } from '@/lib/db/schema';
import { ilike, like, or } from 'drizzle-orm';
import React from 'react';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query } = await searchParams;
  //   console.log(query);
  if (typeof query !== 'string' || query == '')
    return (
      <main>
        <h1 className='my-20 text-center text-4xl text-muted-foreground'>
          Invalid Search Query
        </h1>
      </main>
    );
  const results = await db
    .select()
    .from(listingTable)
    .where(
      or(
        like(listingTable.bookName, `%${query}%`),
        like(listingTable.authorName, `%${query}%`),
      ),
    );
  return (
    <main className='container mx-auto p-10'>
      <div className='grid grid-cols-1 place-items-center justify-center gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4'>
        {results?.map((value, index) => <ItemCard {...value} key={index} />)}
      </div>
    </main>
  );
}
