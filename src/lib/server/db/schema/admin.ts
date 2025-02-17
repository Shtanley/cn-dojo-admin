import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { center } from "./center";

export const admin = pgTable('admin', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    center: text('center').notNull().references(() => center.location),
});

export type Admin = typeof admin.$inferSelect;
