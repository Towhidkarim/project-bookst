import Footer from '@/components/layout/footer';
import SignUpForm from '@/components/layout/signinout/signupform';
import { routes, siteName } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <main className='h-[70svh]'>
      <div className='mx-auto my-10 w-[400px] max-w-[90%] rounded-2xl border p-5 shadow-md'>
        <h1 className='text-center text-xl'>
          Sign Up to <span className='font-bold text-primary'> {siteName}</span>{' '}
        </h1>
        <br />
        <SignUpForm />
        <br />
      </div>
      <p className='my-5 text-center'>
        Alredy have an account?{' '}
        <Link className='font-medium text-primary' href={routes.signIn}>
          {' '}
          Sign In here
        </Link>{' '}
      </p>
      <Footer />
    </main>
  );
}
