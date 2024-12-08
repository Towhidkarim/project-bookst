import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

export default function BookInfo() {
  return (
    <section>
      <Breadcrumb className='container mx-auto px-5'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/allbooks?cat=DSA'>Category</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Book Name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='container mx-auto mt-10 flex flex-col gap-10 md:flex-row'>
        <div className='grid place-items-center md:w-2/5'>
          <figure className='h-[350px] w-64 rounded-2xl bg-muted'>hello</figure>
        </div>
        <div className='flex w-full flex-col px-5 text-center md:w-2/5 md:text-left'>
          <h1 className='mt-3 text-3xl font-semibold md:text-4xl'>{`Book Name Here`}</h1>
          <h4 className='mb-2 text-lg leading-8 text-muted-foreground'>
            {' '}
            by <span className='font-medium'>{`Author Name`} </span>
          </h4>
          <h4 className='mb-4 text-primary'>{`Category`}</h4>
          <h2 className='my-4 text-3xl font-semibold md:text-4xl'>৳{250}</h2>
          <h2 className='text-muted-foreground'>Sold by {`Seller Name`}</h2>
          <h3 className='mb-3 text-green-600'>Available</h3>
          <div className='mt-10 flex w-full flex-col justify-start gap-5 md:flex-row'>
            <Button className='rounded-full' size='lg'>
              Add to Cart
            </Button>
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
        <p className='max-w-prose'>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </section>
  );
}
