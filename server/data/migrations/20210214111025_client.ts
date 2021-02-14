import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
   return knex.schema.createTable('client', table => {
      table.increments();
      table.string('issue_description', 255).notNullable();
      table.integer('confirmation_number').notNullable();
      table.string('issue_img', 255).notNullable();
      table.string('issue_level', 128).notNullable();
      table.string('issue_type', 128).notNullable();
      table.string('issue_status', 128);
      table.integer('times_reported').notNullable();
      table.string('client_name', 128);
      table.string('client_email', 128);
      table.string('client_phone', 128);
      table.timestamp('created_at').defaultTo(knex.fn.now());
   });
}

export async function down(knex: Knex): Promise<void> {
   return knex.schema.dropTableIfExists('client');
}
