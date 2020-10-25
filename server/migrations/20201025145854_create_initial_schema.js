exports.up = function (knex) {
  return knex.schema.createTable("events", function (table) {
    table.uuid("id");
    table.string("name");
    table.datetime("start_time", { useTz: true, precision: 6 });
    table.datetime("end_time", { useTz: true, precision: 6 });
    table.string("location");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
