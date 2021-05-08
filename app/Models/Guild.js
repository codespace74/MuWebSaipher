'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Guild extends Model {
    static get table() {
        return "Guild";
      }
}

module.exports = Guild
