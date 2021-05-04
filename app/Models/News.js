"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class News extends Model {
  static get connection() {
    return "sqlite";
  }
}

module.exports = News;
