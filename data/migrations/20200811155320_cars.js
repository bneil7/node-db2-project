exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("car_id");

    tbl.string("VIN", 17).notNullable().unique();
    tbl.string("make", 30).notNullable();
    tbl.string("model", 30).notNullable();
    tbl.integer("mileage", 7).notNullable();

    tbl.string("transmission", 10);
    tbl.string("title_status", 10);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
