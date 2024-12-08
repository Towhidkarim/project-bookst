import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Scrollbar } from '@radix-ui/react-scroll-area';
import { Quote } from 'lucide-react';

const reviews = [
  {
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ',
    author: 'My Name',
  },
  {
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ',
    author: 'My Name',
  },
  {
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ',
    author: 'My Name',
  },
];

export default function Testimonials() {
  return (
    <section className='my-32'>
      <div className='container mx-auto overflow-hidden px-5 md:max-w-[80svw]'>
        <h1 className='text-lg font-bold'>Testimonials</h1>
        <hr className='my-2 max-w-24 rounded-xl border-muted bg-gray-300 p-1' />
        <br />
        <ScrollArea className='w-full'>
          <div className='flex flex-row items-center justify-center gap-10'>
            {reviews.map((item, index) => (
              <Card
                key={index}
                className='w-64 rounded-2xl bg-muted/50 dark:bg-card'
              >
                <CardContent className='pb-0 pt-6 text-sm'>
                  <div className='flex gap-1 pb-6'>
                    {/* <Star className='size-4 fill-primary text-primary' />
            <Star className='size-4 fill-primary text-primary' />
            <Star className='size-4 fill-primary text-primary' />
            <Star className='size-4 fill-primary text-primary' />
            <Star className='size-4 fill-primary text-primary' /> */}
                    <Quote size={40} className='fill-primary stroke-primary' />
                  </div>
                  {`"${item.reviewText}"`}
                </CardContent>

                <CardHeader>
                  <div className='flex flex-row items-center gap-4'>
                    <Avatar>
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className='flex flex-col'>
                      <CardTitle className=''>{item.author}</CardTitle>
                      <CardDescription>{`Subtitle`}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Scrollbar orientation='horizontal' />
        </ScrollArea>
      </div>
    </section>
  );
}
