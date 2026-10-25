-- Modify "users" table
ALTER TABLE "public"."users" DROP CONSTRAINT "uni_users_email";
-- Create index "uidx_users_email" to table: "users"
CREATE UNIQUE INDEX "uidx_users_email" ON "public"."users" ("email");
