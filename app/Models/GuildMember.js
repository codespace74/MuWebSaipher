'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GuildMember extends Model {
    static get table() {
        return "GuildMember";
    }
}

module.exports = GuildMember
