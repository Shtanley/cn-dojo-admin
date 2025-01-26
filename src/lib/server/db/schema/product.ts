import { integer, numeric, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";
import { user } from "./user";
import { sql } from "drizzle-orm";

export const product = pgTable('product', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    images: text('images').array().notNull().default(sql`'{}'::text[]`),
    price: numeric('price').notNull(),
    description: text('description').notNull(),
    category: text('category').references(() => productCategory.category),
    stock: integer('stock').default(0),
    ...timestamps
});

export const productReview = pgTable('product_review', {
    id: text('id').primaryKey(),
    productId: text('product_id').references(() => product.id),
    userId: text('user_id').references(() => user.id),
    review: text('review').notNull(),
    rating: numeric('rating').notNull(),
    ...timestamps
});

export const productCategory = pgTable('product_category', {
    id: text('id').primaryKey(),
    category: text('category').notNull(),
    ...timestamps
})

export type Product = typeof product.$inferSelect;
export type ProductReview = typeof productReview.$inferSelect;
export type ProductCategory = typeof productCategory.$inferSelect;

