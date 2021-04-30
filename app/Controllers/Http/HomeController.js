"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

class HomeController {
  async index({ view }) {

    const account = await MEMB_INFO.all()

    return view.render("home.index", {});
  }
}

module.exports = HomeController;
