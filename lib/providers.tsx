'use client';
import { CartProvider } from '@/hooks/useCartContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}
