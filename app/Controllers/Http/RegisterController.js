"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

const { validate } = use("Validator");
const { login } = require("../../Functions/Auth");

class RegisterController {
  async index({ view, request }) {
    return view.render(request.TEMPLATE_NAME + ".register.index", {});
  }

  async create({ request, response, session, auth }) {
    const {
      email,
      username,
      password,
      re_password,
      memb_name,
      sno__numb,
    } = request.body;

    const rules = {
      email: "required|email|unique:MEMB_INFO,mail_addr",
      username: "required|unique:MEMB_INFO, memb___id",
      password: `required|equals:${re_password}`,
    };

    const messages = {
      "username.required": "Usuário inválido.",
      "username.unique": "Usuário em uso tente outro.",
      "email.unique": "E-mail em uso tente outro.",
      "email.required": "E-mail inválido.",
      "password.required": "Senha inválida.",
      "password.equals": "Senhas não combinam.",
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(["password"]);

      return response.redirect("back");
    }

    const account = await MEMB_INFO.create({
      memb___id: username,
      memb__pwd: password,
      memb_name,
      sno__numb,
      mail_addr: email,
      bloc_code: 1,
      ctl1_code: 1,
    });

    if (account) {
      await login(auth, account.memb___id, account.memb__pwd); //auth.attempt(account.memb___id, account.memb__pwd);
      response.redirect("/account-panel", true);
    }
  }
}

module.exports = RegisterController;
