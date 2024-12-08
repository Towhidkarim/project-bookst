import { categories } from '@/lib/constants';
import { Bot, Code, Cpu, GitBranch, SquareFunction, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Categories() {
  const icons = [
    <GitBranch />,
    <Zap />,
    <SquareFunction />,
    <Bot />,
    <Code />,
    <Cpu />,
  ];

  return (
    <section id='categories' className='my-20'>
      <div className='container mx-auto px-5 md:max-w-[80svw]'>
        <h1 className='text-lg font-bold'>Find By Category</h1>
        <hr className='my-2 max-w-24 rounded-xl border-muted bg-gray-300 p-1' />
        <br />
        <div className='grid grid-flow-col justify-center gap-5 overflow-x-auto'>
          {categories.map((value, index) => (
            <Link
              href={`/allbooks?cat=${value}`}
              key={index}
              className='my-2 flex h-28 w-36 flex-col items-center justify-center gap-2 rounded-xl bg-muted text-lg font-semibold text-primary ring-primary transition-all hover:ring-2'
            >
              {icons[index]}
              {value}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
