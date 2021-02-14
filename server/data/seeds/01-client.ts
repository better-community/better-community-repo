import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("admin").del();

    // Inserts seed entries
    await knex("admin").insert([
        { email: 'admin@gmail.com', password: 'password' },
        { email: 'admin2@gmail.com', password: 'password' },
    ]);
};
