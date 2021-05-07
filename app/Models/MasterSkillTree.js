"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MasterSkillTree extends Model {
  static get table() {
    return "MasterSkillTree";
  }
  masterLevel() {
    return this.hasOne("App/Models/Character", "Name", "Name");
  }
}

module.exports = MasterSkillTree;
