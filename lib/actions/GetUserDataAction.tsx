'use server';

import { redirect } from 'next/navigation';
import { validateRequest } from '../auth';
import { db } from '../db';
import { userTable } from '../db/schema';
import { routes } from '../constants';
import { eq } from 'drizzle-orm';

export default async function GetUserDataAction() {
  try {
    const { user } = await validateRequest();
    if (!user?.id) redirect(routes.signIn);
    const data = await db
      .select({
        userID: userTable.id,
        email: userTable.email,
        userName: userTable.username,
        address: userTable.address,
        mobileNumber: userTable.mobileNumber,
        institute: userTable.institute,
      })
      .from(userTable)
      .where(eq(userTable.id, user.id))
      .limit(1);
    if (data.length >= 1) return data[0];
    else return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
