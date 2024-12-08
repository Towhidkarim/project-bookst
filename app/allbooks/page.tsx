import BookList from '@/components/layout/allbookspage/booklist';
import Filter from '@/components/layout/allbookspage/filter';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import React from 'react';

export default function page() {
  return (
    <main>
      {/* <Navbar /> */}
      <section className='container mx-auto mb-10 flex flex-col md:flex-row'>
        <div className='my-5 w-full px-5 md:w-1/4'>
          <Filter />
        </div>
        <div className='w-full py-5 md:w-3/4'>
          <BookList />
        </div>
      </section>
      <Footer />
    </main>
  );
}
