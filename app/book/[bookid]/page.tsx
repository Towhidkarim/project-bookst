import BookInfo from '@/components/layout/bookpage/bookinfo';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { db } from '@/lib/db';
import { listingTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';
import AddToCartButton from '@/components/ui/add-to-cart';

export default async function page({
  params,
}: {
  params: Promise<{ bookid: string }>;
}) {
  const bookID = (await params).bookid;
  const bookData = await db
    .select()
    .from(listingTable)
    .where(eq(listingTable.id, bookID))
    .limit(1);
  if (bookData.length < 1)
    return (
      <main>
        <h1 className='my-20 text-center text-4xl font-semibold'>
          Book Not Found
        </h1>
        <Footer />
      </main>
    );

  const {
    bookName,
    authorName,
    category,
    imageUrl,
    listingStatus,
    ownerName,
    description,
    price,
  } = bookData[0];
  return (
    <main>
      {/* <Navbar /> */}
      <br />
      <section>
        <Breadcrumb className='container mx-auto px-5'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/allbooks?cat=${category}`}>
                {category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{bookName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='container mx-auto mt-10 flex flex-col gap-10 md:flex-row'>
          <div className='grid place-items-center md:w-2/5'>
            <figure className='relative h-[350px] w-64 rounded-2xl bg-muted'>
              <Image
                src={imageUrl}
                alt={bookName}
                fill
                className='rounded-2xl object-cover'
              />
            </figure>
          </div>
          <div className='flex w-full flex-col px-5 text-center md:w-2/5 md:text-left'>
            <h1 className='mt-3 text-3xl font-semibold md:text-4xl'>
              {bookName}
            </h1>
            <h4 className='mb-2 text-lg leading-8 text-muted-foreground'>
              {' '}
              by <span className='font-medium capitalize'>{authorName} </span>
            </h4>
            <h4 className='mb-4 text-primary'>{category}</h4>
            <h2 className='my-4 text-3xl font-semibold md:text-4xl'>
              ৳{price}
            </h2>
            <h2 className='text-muted-foreground'>Sold by {ownerName}</h2>
            <h3 className='mb-3 text-green-600'>{listingStatus}</h3>
            <div className='mt-10 flex w-full flex-col justify-start gap-5 md:flex-row'>
              {/* <Button className='rounded-full' size='lg'>
                Add to Cart
              </Button> */}
              <AddToCartButton bookName={bookName} id={bookID} price={price} />
              <Button variant='outline' size='lg' className='rounded-full'>
                Contact Seller
              </Button>
              {/* <Button variant='outline'></Button> */}
            </div>
          </div>
        </div>
        <div className='container mx-auto my-20 max-w-[80svw]'>
          <h1 className='text-lg font-bold'>Details</h1>
          <hr className='my-2 max-w-24 rounded-xl border-muted bg-gray-300 p-1' />
          <br />
          <p className='max-w-prose'>{description}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
