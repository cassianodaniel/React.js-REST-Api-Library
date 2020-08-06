exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.decimal('id').primary();
            table.string('email').notNullable();
            table.string('nome').notNullable();
            table.string('password').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};