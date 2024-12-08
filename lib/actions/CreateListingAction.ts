'use server';

import { redirect } from 'next/navigation';
import { validateRequest } from '../auth';
import { categories, routes } from '../constants';
import { nanoid } from 'nanoid';
import { db } from '../db';
import { listingTable } from '../db/schema';

export default async function CreateListingAction({
  bookName,
  imageUrl,
  authorName,
  category,
  price,
  description,
}: {
  bookName: string;
  imageUrl: string;
  authorName: string;
  category: (typeof categories)[number];
  price: number;
  description: string;
}) {
  const { user } = await validateRequest();
  if (!user?.id || !user.username) redirect(routes.signIn);
  try {
    const id = nanoid();
    await db.insert(listingTable).values({
      id,
      ownerId: user.id,
      ownerName: user.username,
      listingStatus: 'available',
      bookName,
      imageUrl,
      authorName,
      category,
      price,
      description,
    });
    return { ok: true, message: 'Listing Created Succesfully' };
  } catch (error) {
    console.log(error);
    return { ok: false, message: 'Something Went Wrong' };
  }
}
