'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from '@/lib/constants';
import { UploadButton } from '@/lib/uploadthing';
import { useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import CreateListingAction from '@/lib/actions/CreateListingAction';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function OrderForm() {
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();
  const {
    data,
    isPending,
    mutate: CreateListing,
  } = useMutation({
    mutationFn: CreateListingAction,
    onSuccess: (res) => {
      if (res.ok) {
        toast('Succes!', { description: res.message });
        router.refresh();
      } else toast('Error!', { description: res.message });
    },
  });
  const [listingInfo, setListingInfo] = useState<{
    bookName: string;
    authorName: string;
    category: (typeof categories)[number];
    price: number;
    description: string;
  }>({
    bookName: '',
    authorName: '',
    category: categories[0],
    price: 0,
    description: '',
  });
  const submitAction = () => {
    CreateListing({ ...listingInfo, imageUrl });
    // console.log(listingInfo);
  };
  return (
    <div className=''>
      <h1 className='my-3 text-center text-lg font-semibold'>
        Create A Listing
      </h1>
      <form onSubmit={(e) => e.preventDefault()} className='mt-5'>
        <div className='flex flex-col justify-center gap-10 md:flex-row'>
          <div className='flex flex-col gap-4'>
            <Label className='text-center'>
              Upload Book Image
              <UploadButton
                className='my-4'
                endpoint='imageUploader'
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  setImageUrl(res[0].url);
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </Label>
            <figure className='relative mx-auto h-64 w-44 rounded-xl bg-muted'>
              {imageUrl !== '' && (
                <Loader2 size={48} className='m-auto animate-spin' />
              )}
              {imageUrl !== '' && (
                <Image src={imageUrl} alt='' className='z-10' fill />
              )}
            </figure>
          </div>
          <div className='flex w-[350px] flex-col justify-between gap-4'>
            <Label>
              Book Name
              <Input
                type='text'
                placeholder='Book Name'
                required
                onChange={(e) =>
                  setListingInfo((prev) => ({
                    ...prev,
                    bookName: e.target.value,
                  }))
                }
              />
            </Label>
            <Label>
              Author Name
              <Input
                type='text'
                placeholder='Author'
                required
                onChange={(e) =>
                  setListingInfo((prev) => ({
                    ...prev,
                    authorName: e.target.value,
                  }))
                }
              />
            </Label>
            <Label>
              Course Category
              <Select
                required
                onValueChange={(value: (typeof categories)[number]) =>
                  setListingInfo((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Select Category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {categories.map((item, index) => (
                      <SelectItem
                        key={index}
                        value={item}
                        className='capitalize'
                      >
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Label>
            <Label>
              Price
              <Input
                type='number'
                placeholder='0'
                min={0}
                required
                onChange={(e) =>
                  setListingInfo((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
              />
            </Label>
            <Label>
              Description
              <Textarea
                className='max-h-44'
                placeholder='Book Description'
                onChange={(e) =>
                  setListingInfo((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                required
              />
            </Label>
          </div>
        </div>
        <Button
          disabled={isPending}
          onClick={() => submitAction()}
          className='mx-auto my-4 flex w-3/5 flex-row gap-2'
        >
          {isPending && <Loader2 className='animate-spin' />}
          Create Listing
        </Button>
      </form>
    </div>
  );
}
