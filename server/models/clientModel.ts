import db from '../data/configDB';

interface ClientProps {
   issue_description: string;
   confirmation_number: number;
   issue_img: string;
   issue_level: string;
   issue_type: string;
   issue_status: string;
   times_reported: number;
   client_name?: string;
   client_email: string;
   client_phone?: string;
}

async function add(client: ClientProps) {
   const [id] = await db('client').insert(client, 'id');
   return getById(id);
}

function getAll() {
   return db('client');
}

function getById(id: number) {
   return db("client").where({ id });
}

function getBy(filter: any) {
   return db("client").where(filter);
}

function update(id: number, changes: any) {
   return db("client").where({ id }).update(changes);
}

function remove(id: number) {
   return db("client").where({ id }).del();
}

export { 
   add,
   getAll,
   getBy,
   getById,
   update,
   remove
}
