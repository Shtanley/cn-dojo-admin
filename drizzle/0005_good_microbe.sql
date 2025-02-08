CREATE TABLE "product_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text,
	"source" text NOT NULL,
	CONSTRAINT "product_images_source_unique" UNIQUE("source")
);
--> statement-breakpoint
ALTER TABLE "admin_session" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product" DROP COLUMN "images";