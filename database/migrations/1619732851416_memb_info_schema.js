'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MembInfoSchema extends Schema {
  up() {
    this.table('MEMB_INFO', (table) => {
      table.timestamps()
    })
  }

  down() {
    this.table('MEMB_INFO', (table) => {
      table.dropColumn("updated_at")
      table.dropColumn("created_at")
    })
  }
}

module.exports = MembInfoSchema
