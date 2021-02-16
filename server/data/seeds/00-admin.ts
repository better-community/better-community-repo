import * as Knex from "knex";
import bcrypt from 'bcryptjs';
import { rounds } from "../../envVariables";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("admin").del();

    // Inserts seed entries
    await knex("admin").insert([
        { 
           email: 'admin@gmail.com', 
           password: await bcrypt.hash('password', rounds)
        },
        { 
           email: 'admin2@gmail.com', 
           password: await bcrypt.hash('password', rounds) 
        },
    ]);
};
