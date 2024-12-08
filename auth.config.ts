import { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db } from './lib/db';
import { userTable } from './lib/db/schema';
import { eq } from 'drizzle-orm';
import GetAuthUserFromDB from './lib/actions/GetAuthUserFromDB';
import { z } from 'zod';

export const nextAuthConfig = {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // let user = null

        // logic to salt and hash password
        const { email, password } = credentials;
        const schema = z.object({
          email: z.string().email(),
          password: z.string().min(6),
        });
        const parsedData = schema.safeParse({ email, password });
        if (!parsedData.success) throw new Error('Invalid credentials.');
        console.log(credentials);
        //    const data = await db.select().from(user)
        const user = { email: '', password: '' };

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error('Invalid credentials.');
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
