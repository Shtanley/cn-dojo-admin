CREATE TABLE "student" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"birth_year" integer NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "student_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "student_inventory" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" serial NOT NULL,
	"student_id" uuid
);
--> statement-breakpoint
CREATE TABLE "student_profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_id" uuid,
	"belt" text DEFAULT 'White' NOT NULL,
	"level" integer DEFAULT 1 NOT NULL,
	"points" integer DEFAULT 0 NOT NULL,
	"icon" text DEFAULT '',
	"banner" text DEFAULT '',
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "cart" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "order" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "product_review" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_session" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_address" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "cart" CASCADE;--> statement-breakpoint
DROP TABLE "order" CASCADE;--> statement-breakpoint
DROP TABLE "product_review" CASCADE;--> statement-breakpoint
DROP TABLE "user_session" CASCADE;--> statement-breakpoint
DROP TABLE "user" CASCADE;--> statement-breakpoint
DROP TABLE "user_address" CASCADE;--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "price" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "product_category" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'admin_session'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "admin_session" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "admin_session" ALTER COLUMN "id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "student_inventory" ADD CONSTRAINT "student_inventory_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_inventory" ADD CONSTRAINT "student_inventory_student_id_student_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_profile" ADD CONSTRAINT "student_profile_student_id_student_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."student"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product" DROP COLUMN "stock";