import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";

export const user = pgTable('user', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    phone: text('phone').notNull(),
    googleId: text('google_id').unique(),
    ...timestamps
});

export const userAddress = pgTable('user_address', {
    id: text('id').primaryKey(),
    userId: text('user_id').references(() => user.id),
    addressLine: text('address_line'),
    city: text('city'),
    country: text('country'),
    postalCode: text('postal_code'),
});

export type User = typeof user.$inferSelect;
export type UserAddress = typeof userAddress.$inferSelect;

