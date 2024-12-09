'use client';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { routes, siteName } from '@/lib/constants';
import { useCartContext } from '@/hooks/useCartContext';
import { Badge } from '../ui/badge';
import CartButton from '../ui/cart-button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import SearchBar from './searchbar';

export default function Navbar() {
  const { cartItems } = useCartContext();
  const mobileMenuOpts = [
    { title: 'All Books', url: routes.allBooks },
    { title: 'Account', url: routes.dashboard },
    { title: 'Sign In', url: routes.signIn },
    { title: 'Sign Up', url: routes.signUp },
  ];
  return (
    <nav className='w-full bg-background px-3 py-6 shadow-sm'>
      <div className='container mx-auto flex flex-row items-center justify-between'>
        <div className='flex flex-row gap-5'>
          <Link href={'/'} className='text-2xl font-bold text-primary'>
            {siteName}
          </Link>
          <div className='hidden md:block'>
            <SearchBar />
          </div>
        </div>
        <ul className='hidden -translate-x-12 flex-row gap-4 font-medium md:flex'>
          <ul>
            <Link
              href='/#categories'
              className='transition-opacity hover:opacity-85'
            >
              Categories
            </Link>
          </ul>
          <ul>
            <Link
              href={routes.allBooks}
              className='transition-opacity hover:opacity-85'
            >
              All Books
            </Link>
          </ul>
          <ul>
            <Link href='#' className='transition-opacity hover:opacity-85'>
              About
            </Link>
          </ul>
        </ul>
        <ul className='hidden flex-row gap-4 md:flex'>
          <li>
            {/* <Button variant='secondary' size='icon' className='relative'>
              <ShoppingCart />
              <Badge className='absolute bottom-0 left-0 bg-primary p-0 text-xs text-primary-foreground'>
                {cartItems?.length}
              </Badge>
            </Button> */}
            <CartButton />
          </li>
          <li>
            <Button variant='secondary' size='icon'>
              <Heart />
            </Button>
          </li>
          <li>
            <Button variant='secondary' className='' asChild>
              <Link
                className='flex items-center justify-center gap-2'
                href={routes.dashboard}
              >
                <User />
                Account
              </Link>
            </Button>
          </li>
        </ul>
        <div className='flex flex-row items-center justify-center gap-3'>
          <span className='block md:hidden'>
            <CartButton />
          </span>
          <Sheet>
            <SheetTrigger asChild>
              <Button className='block md:hidden' variant='ghost'>
                <Menu className='scale-125' />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='text-center'>Menu</SheetTitle>

                <ul className='mx-10 flex h-[400px] flex-col items-center justify-around pt-10 text-xl'>
                  <li>
                    <SearchBar />
                  </li>
                  {mobileMenuOpts.map((item, index) => (
                    <li key={index}>
                      <SheetClose asChild>
                        <Link href={item.url} className='capitalize'>
                          {item.title}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
