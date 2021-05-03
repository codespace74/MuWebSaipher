"use strict";

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class MEMB_INFO extends Model {

    static boot() {
        super.boot()
        this.addHook('afterFind', 'MembInfoHook.hashPassword')
        this.addHook('afterFind', 'MembInfoHook.dateFormat')
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

    static get hidden() {
        return ['password']
    }


}

module.exports = MEMB_INFO;
