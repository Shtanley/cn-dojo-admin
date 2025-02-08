import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";
import { sql } from "drizzle-orm";

export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    images: text('images').array().notNull().default(sql`'{}'::text[]`),
    price: integer('price').notNull(),
    description: text('description').notNull(),
    category: text('category').references(() => productCategory.category),
    ...timestamps
});

export const productCategory = pgTable('product_category', {
    id: serial('id').primaryKey(),
    category: text('category').unique().notNull(),
    ...timestamps
})

export type Product = typeof product.$inferSelect;
export type ProductCategory = typeof productCategory.$inferSelect;

