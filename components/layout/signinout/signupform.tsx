'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import SignUpAction from '@/lib/actions/SignUpAction';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { routes } from '@/lib/constants';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  username: z.string().min(4).max(24),
  email: z.string().email().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  mobileNumber: z.string().min(10).max(13),
  institute: z.string(),
  address: z.string(),
  password: z.string().min(6).max(32),
  confPassword: z.string().min(6).max(32),
});

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confPassword: '',
      institute: '',
      address: '',
      mobileNumber: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const res = await SignUpAction(values);
    if (res.ok) {
      toast('Succes!', { description: res.message });
      router.push(routes.signIn);
    } else {
      toast('Error!', { description: res.message });
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='username' type='text' {...field} />
              </FormControl>
              {/* <FormDescription>Your Email Address</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='username' type='email' {...field} />
              </FormControl>
              <FormDescription>Your Email Address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='institute'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institute</FormLabel>
              <FormControl>
                <Input placeholder='Institute' type='text' {...field} />
              </FormControl>
              <FormDescription>Your Educational Institute</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='mobileNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input placeholder='01xxxxxxxxx' type='text' {...field} />
              </FormControl>
              {/* <FormDescription>Your Email Address</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea placeholder='Your Address' {...field} />
              </FormControl>
              {/* <FormDescription>Your Email Address</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='********' type='password' {...field} />
              </FormControl>
              <FormDescription>Your Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder='********' type='password' {...field} />
              </FormControl>
              <FormDescription>Confirm Password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='flex w-full flex-row gap-2'
          type='submit'
          disabled={isLoading}
        >
          <span
            className='animate-spin'
            style={{ display: isLoading ? 'block' : 'none' }}
          >
            <Loader2 />
          </span>
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
