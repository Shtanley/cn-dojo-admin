import { integer, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./helpers";
import { product } from "./product";

export const student = pgTable('student', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    belt: text('belt').notNull().default("White"),
    level: integer('level').notNull().default(1),
    points: integer('points').notNull().default(0),
    icon: text("icon"),
    banner: text("banner"),
    ...timestamps
});

export const studentProfile = pgTable('student_profile', {
    id: serial('id').primaryKey(),
    studetnId: uuid("student_id").references(() => student.id),
    belt: text('belt').notNull().default("White"),
    level: integer('level').notNull().default(1),
    points: integer('points').notNull().default(0),
    icon: text("icon").default(""),
    banner: text("banner").default(""),
    ...timestamps
});

export const studentInventory = pgTable('student_inventory', {
    id: serial('id').primaryKey(),
    productId: serial('product_id').references(() => product.id),
    studentId: uuid('student_id').references(() => student.id)
})
export type Student = typeof student.$inferSelect;
export type StudentProfile = typeof studentProfile.$inferSelect;

