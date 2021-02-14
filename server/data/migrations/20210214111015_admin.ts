import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable("admin", table => {
      table.increments();
      table.string('name', 128);
      table.string('email', 128).notNullable().unique();
      table.string('password', 128).notNullable();
      table.string('reset_link', 255);
      table.timestamp('created_at').defaultTo(knex.fn.now());
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTableIfExists('admin');
}
