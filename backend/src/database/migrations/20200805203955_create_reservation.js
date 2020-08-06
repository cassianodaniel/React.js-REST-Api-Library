exports.up = function(knex) {
    return knex.schema.createTable('reservations', function (table) {
        table.decimal('id').primary();
            table.decimal('reservation').notNullable();
            table.decimal('rent').notNullable();
            table.decimal('devolution').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('reservations');
};