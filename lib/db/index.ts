import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import postgres from 'postgres';

export const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
