import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from './user';
import { admin } from './admin';

export const adminSession = pgTable('admin_session', {
	id: text('id').primaryKey(),
	adminId: uuid('admin_id')
		.notNull()
		.references(() => admin.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const userSession = pgTable('user_session', {
	id: text('id').primaryKey(),
	userId: uuid('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type UserSession = typeof userSession.$inferSelect;
export type AdminSession = typeof adminSession.$inferSelect;




