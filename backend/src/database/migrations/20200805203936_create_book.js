exports.up = function(knex) {
    return knex.schema.createTable('books', function (table) {
        table.decimal('id').primary();
            table.string('title').notNullable();
            table.decimal('reservation').notNullable();
            table.decimal('rent').notNullable();
            table.decimal('devolution').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('books');
};