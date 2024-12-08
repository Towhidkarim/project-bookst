import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';
import { categories } from '@/lib/constants';
import Image from 'next/image';
import AddToCartButton from './add-to-cart';

export default function ItemCard({
  id,
  bookName,
  imageUrl,
  authorName,
  category,
  price,
  description,
}: {
  id: string;
  bookName: string;
  imageUrl: string;
  authorName: string;
  category: (typeof categories)[number];
  price: number;
  description: string;
}) {
  return (
    <Card className='flex h-[400px] w-64 flex-col justify-between'>
      <CardHeader className='m-0 px-0 pt-0'>
        <figure className='relative h-48 w-full bg-muted'>
          <Button size='icon' className='absolute left-4 top-4 z-10'>
            <CirclePlus size={24} className='' />
          </Button>
          <Image
            src={imageUrl}
            alt={bookName}
            className='rounded-t-xl object-cover'
            fill
          />
        </figure>
        <div className='mx-4 flex flex-row justify-between py-2'>
          <div>
            <CardTitle className='h-8 text-primary'>{bookName}</CardTitle>
            <CardDescription>{authorName}</CardDescription>
            <span className='text-sm font-medium'>{category}</span>
          </div>
          <span className='font-bold text-primary'>৳{price}</span>
        </div>
        <Link href={`/book/${id}`} className='mx-4 transition hover:opacity-75'>
          See more
        </Link>
      </CardHeader>
      {/* <CardContent className='my-2'>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className='flex flex-row justify-between'>
        {/* <Button className='w-full'>Add to Cart</Button> */}
        <AddToCartButton bookName={bookName} id={id} price={price} />
      </CardFooter>
    </Card>
  );
}
