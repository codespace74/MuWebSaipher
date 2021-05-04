"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ServersSchema extends Schema {
  static get connection() {
    return "sqlite";
  }
  up() {
    this.create("servers", (table) => {
      table.increments();
      table.string("name", 80);
      table.string("ip");
      table.string("port");
      table.string("experience");
      table.timestamps();
    });
  }

  down() {
    this.drop("servers");
  }
}

module.exports = ServersSchema;
