import { validateRequest } from '@/lib/auth';
import { routes } from '@/lib/constants';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();
  if (!session) redirect(routes.signIn);
  return <main>{children}</main>;
}
