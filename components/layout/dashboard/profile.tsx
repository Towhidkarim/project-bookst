'use client';

import { Button } from '@/components/ui/button';
import { useUserInfo } from '@/lib/hooks/useUserInfo';
import { Loader2, Pencil } from 'lucide-react';

export default function Profile() {
  const { data: userData, isLoading } = useUserInfo();
  return (
    <div className='mb-8 flex w-full flex-row items-center gap-10 rounded-2xl border p-5'>
      <div className='medi grid size-14 place-content-center rounded-full bg-primary text-3xl text-primary-foreground'>
        T
      </div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold'>
          {userData?.userName ?? <Loader2 className='animate-spin' />}
        </span>
        <span className='text-sm text-muted-foreground'>
          {userData?.institute}
        </span>
      </div>
      <div className='ml-auto'>
        <Button variant='ghost'>
          <Pencil />
        </Button>
      </div>
    </div>
  );
}
