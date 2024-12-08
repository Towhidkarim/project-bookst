import SignInForm from '@/components/layout/signinout/signinform';
import { siteName } from '@/lib/constants';
import React from 'react';

export default function page() {
  return (
    <main className='relative h-[70svh]'>
      <div className='absolute left-1/2 top-1/2 mx-auto w-80 -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-5 shadow-md'>
        <h1 className='text-center text-xl'>
          Sign In to <span className='font-bold text-primary'> {siteName}</span>{' '}
        </h1>
        <br />
        <SignInForm />
      </div>
    </main>
  );
}
