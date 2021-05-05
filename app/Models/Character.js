"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Character extends Model {
  static get table() {
    return "Character";
  }

  characters() {
    return this.belongsTo("App/Models/MEMB_INFO", "memb___id", "AccountID");
  }
}

module.exports = Character;
