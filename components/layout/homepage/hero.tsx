import { routes, siteName } from '@/lib/constants';
import heroImg from '@/public/hero.svg';
import Image from 'next/image';
import { Button } from '../../ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='mx-auto bg-muted/40 px-5 py-10'>
      <div className='container mx-auto flex flex-col-reverse items-center justify-center gap-0 md:flex-row'>
        <div className='my-8 flex flex-col items-center justify-center gap-2 md:w-1/2'>
          <h3 className='text-lg font-semibold'>
            Have old books lying around?
          </h3>
          <h1 className='text-center text-4xl font-bold md:text-5xl'>
            Trade them on{' '}
            <span className='font-extrabold text-primary'> {siteName}</span>{' '}
          </h1>
          <h4 className='text-lg'>Make your old books useful</h4>
          <br />
          <Button className='rounded-3xl' size='lg' asChild>
            <Link href={routes.allBooks}>{`See Books`}</Link>
          </Button>
        </div>
        <div className='relative w-2/5'>
          <Image src={heroImg} alt='' className='max-h-[400px] w-auto' />
        </div>
      </div>
    </section>
  );
}
