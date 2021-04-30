"use strict";

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MEMB_INFO extends Model {

    static boot () {
        super.boot()
        this.addHook('afterFind', 'MembInfoHook.hashPassword')
      }

    static get table() {
        return 'MEMB_INFO';
    }

    static get incrementing() {
        return true;
    }

    static get primaryKey() {
        return 'memb_guid';
    }


}

module.exports = MEMB_INFO;
