ALTER TABLE "student" ADD COLUMN "wristband-id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_wristband-id_unique" UNIQUE("wristband-id");