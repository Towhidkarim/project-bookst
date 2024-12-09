import SignInForm from '@/components/layout/signinout/signinform';
import { routes, siteName } from '@/lib/constants';
import Link from 'next/link';
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
        <p className='mt-6 text-sm'>
          Don't have an account?{' '}
          <Link
            href={routes.signUp}
            className='font-semibold text-primary hover:underline'
          >
            {' '}
            Sign Up Here
          </Link>{' '}
        </p>
      </div>
    </main>
  );
}
