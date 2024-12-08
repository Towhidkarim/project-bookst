'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import bkashLogo from '@/public/bkash.png';
import { Input } from '@/components/ui/input';
import { routes, siteName } from '@/lib/constants';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Bkashform({ amount }: { amount: number }) {
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='ml-auto w-full font-bold'>Pay with Bkash</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='border-none bg-[#e2136e] px-2'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast('Payment Succesful');
            router.push(routes.dashboard);
          }}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>
              <Image
                src={bkashLogo}
                className='rounded-lg border-2 border-white'
                alt='bkash'
              />
            </AlertDialogTitle>
            <p className='grid w-full place-content-center rounded-lg border border-white py-3 text-white'>
              <span className='text-center'>
                Merchant: <b>{siteName}</b> <br />
                Invoice no. {Math.round(Math.random() * 9999) + 10000} <br />
                Amount: BDT ৳{amount}
              </span>
            </p>
            <div className='grid w-full place-content-center gap-5 rounded-lg border border-white px-5 py-5 text-white'>
              <label className='text-center'>
                Your Bkash Account Number
                <Input
                  className='w-80 bg-white text-black'
                  type='text'
                  required
                  placeholder='eg 01xxxxxxxxx'
                />
              </label>
              <label className='text-center'>
                Pin Number:
                <Input
                  type='password'
                  required
                  className='w-80 bg-white text-black'
                  maxLength={5}
                  placeholder='*****'
                />
              </label>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className='my-2 flex w-full items-center justify-center'>
            {/* <AlertDialogAction asChild> */}
            <Button type='submit' className='bg-[#bd1d5c] hover:bg-[#bd1d5c]'>
              Proceed
            </Button>
            {/* </AlertDialogAction> */}
            <AlertDialogCancel className='border-none bg-[#bd1d5c] text-white'>
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
