'use client';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useCartContext } from '@/hooks/useCartContext';
import { useUserInfo } from '@/lib/hooks/useUserInfo';
import { XIcon } from 'lucide-react';
import React from 'react';
import Bkashform from './bkashform';

export default function BillingSection() {
  const { cartItems, removeFromCart } = useCartContext();
  const { data: userInfo } = useUserInfo();
  return (
    <div className='container mx-auto flex flex-col justify-center md:flex-row'>
      <div className='md:w-2/4'>
        <div className='mx-auto my-10 w-11/12'>
          <div className='rounded-t-2xl border bg-muted px-5 py-4 text-xl font-medium'>
            Your Billing Address
          </div>
          <div className='rounded-2xl rounded-t-none border p-5'>
            <h1 className='text-lg'> Add Shipping Address</h1>
            <Textarea defaultValue={userInfo?.address} className='my-2 h-24' />
          </div>
        </div>
        <div className='mx-auto my-10 w-11/12'>
          <div className='rounded-t-2xl border bg-muted px-5 py-4 text-xl font-medium'>
            Payment Method
          </div>
          <div className='rounded-2xl rounded-t-none border p-5'>
            <h1 className='text-lg'> Select Payment Method</h1>
            <div className='flex w-full flex-row justify-around'>
              <div className='my-3 grid h-44 w-64 place-content-center rounded-xl bg-muted'>
                Bkash
              </div>
              <div className='my-3 grid h-44 w-64 place-content-center rounded-xl bg-muted'>
                Cash On Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/4'>
        <div className='mx-auto my-10 w-11/12'>
          <div className='rounded-t-2xl border px-5 py-4 text-center text-xl font-medium'>
            Cart Items
          </div>
          <div className='rounded-2xl rounded-t-none border p-5'>
            <ul>
              {cartItems.map((v, i) => (
                <li
                  key={i}
                  className='my-3 flex flex-row items-center justify-between'
                >
                  <figure className='flex flex-row gap-3'>
                    {/* <div className='h-24 w-16 rounded-xl bg-muted'></div> */}
                    <figcaption className='flex flex-col justify-center font-medium'>
                      <span>{v.name} </span>
                      <span className='text-primary'>৳{v.price}</span>
                    </figcaption>
                  </figure>
                  <Button onClick={() => removeFromCart(v.id)} variant='ghost'>
                    <XIcon />
                  </Button>
                </li>
              ))}
            </ul>
            <Separator />
            <h1 className='my-3 text-right text-lg'>
              Total:{' '}
              <span className='font-semibold text-primary'>
                ৳{cartItems.reduce((partialSum, a) => partialSum + a.price, 0)}
              </span>
            </h1>
            {/* <Button className='w-full' size='lg'>
              Confirm Order
            </Button> */}
            <Bkashform
              amount={cartItems.reduce(
                (partialSum, a) => partialSum + a.price,
                0,
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
