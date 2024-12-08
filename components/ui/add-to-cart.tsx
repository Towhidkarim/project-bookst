'use client';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { useCartContext } from '@/hooks/useCartContext';

export default function AddToCartButton(
  {
    id,
    bookName,
    price,
  }: {
    id: string;
    bookName: string;
    price: number;
  },
  className?: string,
) {
  const { addToCart } = useCartContext();
  return (
    <Button
      onClick={() => addToCart({ id, name: bookName, price, quantity: 1 })}
      className={cn(className)}
    >
      Add to Cart
    </Button>
  );
}
