import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const center = pgTable('center', {
    id: uuid('id').defaultRandom().primaryKey(),
    location: text('location').notNull().unique(),
});

export type Center = typeof center.$inferSelect;
