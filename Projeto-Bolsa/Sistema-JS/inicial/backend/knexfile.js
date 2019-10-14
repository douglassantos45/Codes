module.exports = {
  client: 'postgresql',
  connection: {
    database: 'db_projeto',
    user:     'douglas',
    password: '99458483'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
