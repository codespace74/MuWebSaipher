"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NewsSchema extends Schema {
  static get connection() {
    return "sqlite";
  }
  up() {
    this.create("news", (table) => {
      table.increments();
      table.string("title", 80).notNullable();
      table.string("author", 80).notNullable();
      table.string("body", 1000).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("news");
  }
}

module.exports = NewsSchema;
