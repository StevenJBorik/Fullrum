import { Migration } from '@mikro-orm/migrations';

export class Migration20220217172559 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
    this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
    this.addSql('alter table "post" drop constraint if exists "post_updated_at_check";');
    this.addSql('alter table "post" alter column "updated_at" type timestamptz(0) using ("updated_at"::timestamptz(0));');
    this.addSql('alter table "post" drop constraint if exists "post_title_check";');
    this.addSql('alter table "post" alter column "title" type text using ("title"::text);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_created_at_check";');
    this.addSql('alter table "post" alter column "created_at" type jsonb using ("created_at"::jsonb);');
    this.addSql('alter table "post" drop constraint if exists "post_updated_at_check";');
    this.addSql('alter table "post" alter column "updated_at" type jsonb using ("updated_at"::jsonb);');
    this.addSql('alter table "post" drop constraint if exists "post_title_check";');
    this.addSql('alter table "post" alter column "title" type varchar(255) using ("title"::varchar(255));');
  }

}
