import DashboardMenu from '@/components/layout/dashboard/dashboardmenu';
import Footer from '@/components/layout/footer';
import OrderForm from '@/components/layout/orderspage/orderform';
import OrderTable from '@/components/layout/orderspage/ordertable';
import React from 'react';

export default function page() {
  return (
    <main>
      <section className='mx-auto my-10 w-full px-5 md:w-[60svw]'>
        <OrderForm />
        <br />
        <br />
        <h1 className='text-center text-lg font-semibold'>My Listings</h1>
        <OrderTable />
        <DashboardMenu />
      </section>
      <Footer />
    </main>
  );
}
