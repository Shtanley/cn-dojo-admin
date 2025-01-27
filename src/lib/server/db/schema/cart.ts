import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";
import { product } from "./product";
import { user } from "./user";

export const cart = pgTable('cart', {
    id: text('id').primaryKey(),
    productId: text('product_id').references(() => product.id),
    userId: uuid('user_id').references(() => user.id),
    quantity: integer('quantity').notNull().default(1),
    ...timestamps
});

export type Cart = typeof cart.$inferSelect;

