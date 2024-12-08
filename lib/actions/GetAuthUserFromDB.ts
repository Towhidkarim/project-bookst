import { and, eq } from 'drizzle-orm';
import { userTable } from '../db/schema';
import { db } from '../db';

export default async function GetAuthUserFromDB(
  email: string,
  passsword: string,
) {
  try {
    const res = await db
      .select({
        userID: userTable.id,
        email: userTable.email,
        userName: userTable.username,
      })
      .from(userTable)
      .where(
        and(eq(userTable.email, email), eq(userTable.passwordHash, passsword)),
      );
    if (res.length === 1) return res[0];
    else return null;
  } catch (e) {
    return null;
  }
}
