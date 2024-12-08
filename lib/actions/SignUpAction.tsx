'use server';
import z from 'zod';
import { db } from '../db';
import { userTable } from '../db/schema';
import { eq } from 'drizzle-orm';
import { nanoid } from 'nanoid';

const formSchema = z.object({
  username: z.string().min(4).max(24),
  email: z.string().email().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  mobileNumber: z.string().min(10).max(13),
  institute: z.string(),
  password: z.string().min(6).max(32),
  address: z.string(),
  confPassword: z.string().min(6).max(32),
});

export default async function SignUpAction(
  formData: z.infer<typeof formSchema>,
) {
  try {
    const exists = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, formData.email));
    if (exists.length > 0)
      return { ok: false, message: 'User with Mail Already Exists' };
    const userID = nanoid();
    await db.insert(userTable).values({
      id: userID,
      address: formData.address,
      email: formData.email,
      institute: formData.institute,
      mobileNumber: formData.mobileNumber,
      username: formData.username,
      passwordHash: formData.password,
    });

    return { ok: true, message: 'Signed Up Succesfully' };
  } catch (error) {
    return { ok: false, message: 'Something Went Wrong' };
  }
}
