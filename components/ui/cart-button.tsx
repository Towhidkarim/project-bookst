'use client';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from './button';
import { ShoppingCart, XIcon } from 'lucide-react';
import { useCartContext } from '@/hooks/useCartContext';
import { Badge } from './badge';
import Link from 'next/link';
import { routes } from '@/lib/constants';

export default function CartButton() {
  const { cartItems, removeFromCart, clearCart } = useCartContext();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='secondary' size='icon' className='relative'>
          <ShoppingCart />
          <Badge className='absolute bottom-0 left-0 bg-primary p-0 px-1 text-xs text-primary-foreground'>
            {cartItems?.length}
          </Badge>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Your Shopping Cart</DrawerTitle>
          <div className='flex flex-col gap-3'>
            <div className='m-5 my-2 flex flex-row justify-between border-b-2 py-2'>
              <span className='text-lg'>Book name</span>
              <span className='text-lg font-semibold'>Price</span>
            </div>
            {cartItems.map((item, index) => (
              <div key={index} className='m-5 flex flex-row justify-between'>
                <span className='text-lg'>{item.name}</span>
                <div className='flex flex-row justify-center gap-2 text-lg font-semibold'>
                  ৳{item.price}{' '}
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    variant='ghost'
                  >
                    <XIcon />
                  </Button>
                </div>
              </div>
            ))}
            <div className='mx-5 ml-auto font-bold'>
              Total: ৳
              {cartItems.reduce((partialSum, a) => partialSum + a.price, 0)}
            </div>
          </div>
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
        <DrawerFooter className='mx-10'>
          <Button asChild>
            <Link href={routes.checkout}>Checkout</Link>
          </Button>
          <Button className='' onClick={() => clearCart()} variant='outline'>
            Clear Cart
          </Button>
          <DrawerClose>
            <Button variant='outline' className='w-full'>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
