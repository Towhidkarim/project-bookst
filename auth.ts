import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db } from './lib/db';
import { userTable } from './lib/db/schema';
import { eq } from 'drizzle-orm';
import GetAuthUserFromDB from './lib/actions/GetAuthUserFromDB';
import { z } from 'zod';
import { nextAuthConfig } from './auth.config';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      userID: string;

      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user'];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthConfig);
