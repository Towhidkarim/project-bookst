import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { categories } from '../constants';

export const userTable = sqliteTable('users', {
  id: text('id').primaryKey().notNull(),
  username: text('username').notNull(),
  email: text('email').notNull(),
  institute: text('institute').notNull(),
  passwordHash: text('passwordHash').notNull(),
  mobileNumber: text('mobileNumber').notNull(),
  address: text('address').notNull(),
});
export const sessionTable = sqliteTable('session', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  expiresAt: integer('expires_at').notNull(),
});

export const listingTable = sqliteTable('listings', {
  id: text().primaryKey().notNull(),
  ownerId: text()
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  ownerName: text()
    .notNull()
    .references(() => userTable.username, { onDelete: 'cascade' }),
  bookName: text().notNull(),
  imageUrl: text().notNull(),
  authorName: text().notNull(),
  category: text({ enum: categories }).notNull(),
  price: integer().notNull(),
  description: text().notNull(),
  listingStatus: text({ enum: ['available', 'sold', 'unavailable'] })
    .notNull()
    .default('available'),
});

export type TListing = typeof listingTable.$inferSelect;
