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
import { Skeleton } from './skeleton';

export default function ItemCardSkeleton() {
  return (
    <Card className='flex h-[375px] w-64 flex-col justify-between'>
      <CardHeader className='m-0 px-0 pt-0'>
        <Skeleton className='relative h-48 w-full bg-muted'>
          {/* <Button size='icon' className='absolute left-4 top-4'>
              <CirclePlus size={24} className='' />
            </Button> */}
        </Skeleton>
        <div className='mx-4 flex flex-row justify-between py-2'>
          <div>
            <CardTitle className='h-6 text-primary'>
              <Skeleton className='h-full w-20' />
            </CardTitle>
            <CardDescription className='my-2'>
              <Skeleton className='h-4 w-12' />
            </CardDescription>
          </div>
          <span className='font-bold text-primary'>
            <Skeleton className='h-6 w-10' />
          </span>
        </div>
        {/* <Link href='/book/100' className='mx-4 transition hover:opacity-75'>
            See more
          </Link> */}
      </CardHeader>
      {/* <CardContent className='my-2'>
          <p>Card Content</p>
        </CardContent> */}
      <CardFooter className='flex flex-row justify-between'>
        {/* <Button className='w-full'>Add to Cart</Button> */}
        <Skeleton className='h-10 w-full' />
      </CardFooter>
    </Card>
  );
}
