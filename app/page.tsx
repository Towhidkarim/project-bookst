import Footer from '@/components/layout/footer';
import Categories from '@/components/layout/homepage/categories';
import Hero from '@/components/layout/homepage/hero';
import Recents from '@/components/layout/homepage/recents';
import Testimonials from '@/components/layout/homepage/testimonials';
import Navbar from '@/components/layout/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Categories />
      <Recents />
      <Testimonials />
      <Footer />
    </main>
  );
}
