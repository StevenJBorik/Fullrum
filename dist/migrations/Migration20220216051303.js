"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220216051303 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220216051303 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("_id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "title" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220216051303 = Migration20220216051303;
//# sourceMappingURL=Migration20220216051303.js.map