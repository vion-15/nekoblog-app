-- Create "users" table
CREATE TABLE "public"."users" (
 "id" uuid NOT NULL,
 "username" character varying(50) NOT NULL,
 "email" character varying(100) NOT NULL,
 "password_hash" text NOT NULL,
 "image" text NULL,
 "role" text NOT NULL,
 "is_active" boolean NULL,
 "created_at" timestamptz NULL,
 "updated_at" timestamptz NULL,
 PRIMARY KEY ("id"),
 CONSTRAINT "uni_users_email" UNIQUE ("email"),
 CONSTRAINT "uni_users_username" UNIQUE ("username")
);
