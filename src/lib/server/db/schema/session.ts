import { pgTable, serial, timestamp, uuid } from 'drizzle-orm/pg-core';
import { admin } from './admin';

export const adminSession = pgTable('admin_session', {
	id: serial('id').primaryKey(),
	adminId: uuid('admin_id')
		.notNull()
		.references(() => admin.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type AdminSession = typeof adminSession.$inferSelect;




