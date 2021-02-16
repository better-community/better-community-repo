import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("client").del();

    // Inserts seed entries
    await knex("client").insert([
        {
           issue_description: 'there is a tree on the road',
           confirmation_number: 2323,
           issue_img: 'www.google.com',
           issue_level: 'normal',
           issue_type: 'fallen tree',
           issue_status: 'pending',
           times_reported: 1,
           client_name: 'Lisa',
           client_email: 'lisa@gmail.com',
           client_phone: '4342349655'
        },
        {
           issue_description: 'there is a dead animal in my house',
           confirmation_number: 2323,
           issue_img: 'www.google.com',
           issue_level: 'normal',
           issue_type: 'dead animal',
           issue_status: 'pending',
           times_reported: 1,
           client_name: 'Lisa',
           client_email: 'lisa@gmail.com',
           client_phone: '4342349655'
        },
    ]);
};
