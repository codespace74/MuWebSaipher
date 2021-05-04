"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DownloadsSchema extends Schema {
  static get connection() {
    return "sqlite";
  }
  up() {
    this.create("downloads", (table) => {
      table.increments();
      table.string("name", 80);
      table.string("link", 1000);
      table.string("mirror");
      table.string("size", "10");
      table.string("type");
      table.timestamps();
    });
  }

  down() {
    this.drop("downloads");
  }
}

module.exports = DownloadsSchema;
