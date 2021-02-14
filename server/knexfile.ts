import { user, password, host, port } from './envVariables';

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user,
      password,
      host,
      port,
      database: 'better_community'  
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
       directory: './data/migrations'
    },
    seeds: {
       directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    }
  }
};
