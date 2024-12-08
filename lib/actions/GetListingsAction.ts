'use server';

import { and, desc, inArray } from 'drizzle-orm';
import { db } from '../db';
import { listingTable } from '../db/schema';
import { categories } from '../constants';

const statuses = ['available', 'sold', 'unavailable'];
export default async function ({
  status,
  category,
  offset = 0,
  count = 12,
}: {
  status: ('available' | 'sold' | 'unavailable')[];
  category: (typeof categories)[number][];
  count: number;
  offset: number;
}) {
  try {
    const data = await db
      .select()
      .from(listingTable)
      .where(
        and(
          inArray(listingTable.listingStatus, status),
          inArray(listingTable.category, category),
        ),
      )
      .offset(offset)
      .limit(count);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
