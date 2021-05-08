"use strict";
const { validate } = use("Validator");
const Hash = use("Hash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

const { getCoinsAccount } = require("../../Functions/Account");
const { login } = require("../../Functions/Auth");
class AccountPanelController {
  async index({ view, auth, request }) {
    const coins = await getCoinsAccount(auth.user.memb___id);
    return view.render(request.TEMPLATE_NAME + ".account.panel.index", {
      coins,
    });
  }

  async login({ view, request }) {
    return view.render(request.TEMPLATE_NAME + ".account.login.index", {});
  }

  async auth({ request, response, session, auth }) {
    const { username, password } = request.body;

    const rules = {
      username: `required|min:1|max:10`,
      password: `required`,
    };
    const messages = {
      "username.required": "Usuário inválido.",
      "username.min": "Usuário inválido.",
      "username.max": "Usuário inválido.",

      "password.required": "Senha inválida.",
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect("back");
    }
    const account = await MEMB_INFO.findBy("memb___id", username);
    if (account) {
      var passwordCheck = await Hash.verify(password, account.memb__pwd);
    }

    if (!account || !passwordCheck) {
      session
        .withErrors([{ field: "password", message: "Falha no login" }])
        .flashAll();
      return response.redirect("back");
    } else {
      await login(auth, username, password); //auth.attempt(username, password);
      response.redirect("/account-panel", true);
    }
  }

  async logout({ auth, response }) {
    await auth.logout();
    response.redirect("/", true);
  }
}

module.exports = AccountPanelController;
