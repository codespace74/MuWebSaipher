"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MEMB_STAT extends Model {
  static get table() {
    return "MEMB_STAT";
  }
}

module.exports = MEMB_STAT;
