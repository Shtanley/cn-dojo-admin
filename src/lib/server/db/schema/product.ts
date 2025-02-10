import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";

export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
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

export const productImage = pgTable('product_images', {
    id: serial('id').primaryKey(),
    productId: serial('product_id').references(() => product.id),
    source: text("source").unique().notNull()
})

export type Product = typeof product.$inferSelect;
export type ProductCategory = typeof productCategory.$inferSelect;
export type ProductImage = typeof productImage.$inferSelect;

