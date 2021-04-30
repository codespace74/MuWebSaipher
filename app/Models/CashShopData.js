'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CashShopData extends Model {

    static get table() {
        return 'CashShopData';
    }

    static get primaryKey() {
        return 'AccountID';
    }

    static get hidden() {
        return ['AccountID']
    }

}

module.exports = CashShopData
