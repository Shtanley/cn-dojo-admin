CREATE TABLE "center" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"location" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "admin" ADD COLUMN "center" text NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "user_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "center" text NOT NULL;--> statement-breakpoint
ALTER TABLE "admin" ADD CONSTRAINT "admin_center_center_location_fk" FOREIGN KEY ("center") REFERENCES "public"."center"("location") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_center_center_location_fk" FOREIGN KEY ("center") REFERENCES "public"."center"("location") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student" ADD CONSTRAINT "student_user_name_unique" UNIQUE("user_name");