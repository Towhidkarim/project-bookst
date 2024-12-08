'use server';

import { redirect } from 'next/navigation';
import { validateRequest } from '../auth';
import { db } from '../db';
import { listingTable } from '../db/schema';
import { routes } from '../constants';
import { eq } from 'drizzle-orm';

export default async function GetListingsByOwnerAction() {
  const { user } = await validateRequest();
  if (!user?.id) redirect(routes.signIn);
  try {
    const data = await db
      .select()
      .from(listingTable)
      .where(eq(listingTable.ownerId, user.id));
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
