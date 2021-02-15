import db from '../data/configDB';

interface AdminProps {
   name?: string;
   email: string;
   password: string;
}

async function add(admin: AdminProps) {
   const [adminId] = await db('admin').insert(admin, 'id');
   return findById(adminId);
};

function getBy(filter: any) {
   return db('admin').where(filter);
}

function findById(id: number) {
   return db('admin as a')
      .where({ id })
      .select('a.id', 'a.name', 'a.email', 'a.created_at')
}

function update(id: number, changes: any) {
   return db('admin').where({ id }).update(changes);
}

function remove(id: number) {
   return db('admin').where({ id }).del().returning('*');
}

export { 
   add,
   getBy,
   findById,
   update,
   remove
};
