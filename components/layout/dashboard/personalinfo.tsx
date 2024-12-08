'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { useUserInfo } from '@/lib/hooks/useUserInfo';
import React from 'react';

export default function PersonalInfo() {
  const { data: userInfo, isLoading } = useUserInfo();
  const infos = [
    { title: 'Email', value: userInfo?.email },
    { title: 'Mobile Number', value: userInfo?.mobileNumber },
    { title: 'Address', value: userInfo?.address },
    { title: 'UserID', value: userInfo?.userID },
  ];
  return (
    <div className='mb-8 flex w-full flex-row items-center gap-10 rounded-2xl border p-5'>
      <div className='grid w-full grid-cols-1 justify-around gap-5 lg:grid-cols-2'>
        {isLoading ? (
          <Skeleton className='mx-auto h-44 w-full rounded-2xl' />
        ) : (
          <>
            {infos.map((item, index) => (
              <div key={index} className='flex flex-col gap-1'>
                <span className='font-semibold capitalize'>{item.title}</span>
                <span className='text-muted-foreground'>{item.value}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
