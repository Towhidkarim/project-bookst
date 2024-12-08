import BillingSection from '@/components/layout/checkoutpage/billingsection';

export default function page() {
  return (
    <main>
      <div className='w-full bg-muted'>
        <h1 className='container mx-auto px-5 py-10 text-3xl font-semibold'>
          Checkout
        </h1>
      </div>
      <BillingSection />
    </main>
  );
}
