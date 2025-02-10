import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { admin } from './admin';

export const adminSession = pgTable('admin_session', {
	id: text("id").notNull(),
	adminId: uuid('admin_id')
		.notNull()
		.references(() => admin.id).notNull(),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type AdminSession = typeof adminSession.$inferSelect;




