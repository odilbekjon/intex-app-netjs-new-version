// Update with your config settings.
const { knexSnakeCaseMappers } = require('nestjs-objection')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'support',
      user:     'postgres',
      password: 'odil'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory:'./seeds'
    },
    
    ...knexSnakeCaseMappers
  }
};
