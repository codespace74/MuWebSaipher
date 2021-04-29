"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

class RegisterController {
  async index({ view }) {
    return view.render("register/index", {});
  }

  async create({ request }) {
    const {
      memb___id,
      memb__pwd,
      memb_name,
      sno__numb,
      mail_addr
    } = request.body

    const account = await MEMB_INFO.create({
      memb___id,
      memb__pwd,
      memb_name,
      sno__numb,
      mail_addr
    })

    response.redirect('/', true)
  }
}

module.exports = RegisterController;
