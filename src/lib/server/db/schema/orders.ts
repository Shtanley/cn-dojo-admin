import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";
import { product } from "./product";
import { user } from "./user";
import { serial } from "drizzle-orm/pg-core";

export const order = pgTable('order', {
    id: text('id').primaryKey(),
    productId: text('product_id').references(() => product.id),
    userId: text('user_id').references(() => user.id),
    orderNumber: serial('order_number').unique(),
    ...timestamps
});

export type Order = typeof order.$inferSelect;

