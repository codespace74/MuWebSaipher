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
      table.string("title", 80);
      table.string("author", 80);
      table.string("body", 2000);
      table.string("cover", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("news");
  }
}

module.exports = NewsSchema;
