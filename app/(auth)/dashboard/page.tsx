import DashboardMenu from '@/components/layout/dashboard/dashboardmenu';
import PersonalInfo from '@/components/layout/dashboard/personalinfo';
import Profile from '@/components/layout/dashboard/profile';
import React from 'react';

export default async function page() {
  return (
    <main className='min-h-svh'>
      <section className='mx-auto my-10 w-full px-5 md:w-[60svw]'>
        <h1 className='my-2 text-lg font-semibold'>My Profile</h1>
        <Profile />
        <h1 className='my-2 text-lg font-semibold'>My Personal Information</h1>
        <PersonalInfo />
      </section>
      <DashboardMenu />
    </main>
  );
}
