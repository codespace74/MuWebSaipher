"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

class HomeController {
  async index({ view, request }) {
    return view.render(request.TEMPLATE_NAME + ".home.index", {});
  }
}

module.exports = HomeController;
