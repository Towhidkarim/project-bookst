'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import GetListingsByOwnerAction from '@/lib/actions/GetListingsByOwnerAction';
import { queryKeys } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function OrderTable() {
  const { data: bookData, isLoading } = useQuery({
    queryFn: async () => GetListingsByOwnerAction(),
    queryKey: [queryKeys.ownerListings],
    staleTime: 1000 * 60 * 2,
  });
  if (isLoading)
    return <Loader2 className='mx-auto my-10 animate-spin' size={38} />;
  return (
    <Table className='my-5 rounded-2xl border-2 p-4'>
      <TableCaption>A list of your recent Listings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-right'>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookData?.map((item, index) => (
          <TableRow key={index}>
            <TableCell className='font-medium'>
              <Link href={`/book/${item.id}`} className='hover:underline'>
                {item.id}
              </Link>
            </TableCell>
            <TableCell className='capitalize'>{item.bookName}</TableCell>
            <TableCell>{item.listingStatus}</TableCell>
            <TableCell className='text-right font-semibold'>
              ৳{item.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
