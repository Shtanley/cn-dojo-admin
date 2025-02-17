import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { admin } from './admin';
import { student } from './student';

export const adminSession = pgTable('admin_session', {
	id: text("id").notNull(),
	adminId: uuid('admin_id')
		.notNull()
		.references(() => admin.id).notNull(),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const studentSession = pgTable('student_session', {
	id: text("id").notNull(),
	studentId: uuid('student_id')
		.notNull()
		.references(() => student.id).notNull(),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type StudentSession = typeof adminSession.$inferSelect;

export type AdminSession = typeof adminSession.$inferSelect;




