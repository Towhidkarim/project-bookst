'use client';

import { routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { House, MessageSquareMore, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { icon: <House />, title: 'Home', url: routes.dashboard },
  { icon: <ShoppingBasket />, title: 'Orders', url: routes.orders },
  { icon: <MessageSquareMore />, title: 'Chats', url: '' },
];

export default function DashboardMenu() {
  const url = usePathname();
  return (
    <div className='fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-row items-center justify-center gap-5 rounded-3xl border bg-white px-10 py-2 shadow-md md:bottom-8'>
      {items.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          className={cn(
            'flex size-16 flex-col items-center justify-center gap-px rounded-2xl border text-xs text-primary transition-all hover:bg-muted',
            {
              'bg-primary text-primary-foreground': url === item.url,
            },
          )}
        >
          {item.icon}
          {item.title}
          {/* <div className='w-full rounded-full bg-primary p-0.5' /> */}
        </Link>
      ))}
    </div>
  );
}
