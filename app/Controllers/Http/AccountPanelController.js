"use strict";
const { validate } = use("Validator");
const Hash = use("Hash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CashShopData = use("App/Models/CashShopData");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

class AccountPanelController {
  async index({ view, auth }) {
    const coins = await this.getCoinsAccount(auth.user.memb___id);
    return view.render("account.panel.index", { coins });
  }

  async getCoinsAccount(user) {
    const coins = await CashShopData.findBy("AccountID", user);
    return coins;
  }

  async login({ view }) {
    return view.render("account.login.index", {});
  }

  async auth({ request, response, session, auth }) {
    const { username, password } = request.body;
    try {
      const account = await MEMB_INFO.findBy("memb___id", username);

      const rules = {
        username: `required|equals:${account.memb___id}`,
        password: `required`,
      };
      const messages = {
        "username.required": "Usuário inválido.",
        "username.equals": "Usuário não encontrado.",
        "password.required": "Senha inválida.",
      };

      const validation = await validate(request.all(), rules, messages);

      if (validation.fails()) {
        session.withErrors(validation.messages()).flashAll();
        return response.redirect("back");
      }

      const passwordCheck = await Hash.verify(password, account.memb__pwd);

      if (!passwordCheck) {
        session
          .withErrors([{ field: "password", message: "Falha no login" }])
          .flashAll();
        return response.redirect("back");
      }

      await auth.attempt(username, password);
      response.redirect("/account-panel", true);
    } catch (err) {
      session.put("loginError", "Error no login");
      return response.redirect("back");
    }
  }

  async logout({ auth, response }) {
    await auth.logout();
    response.redirect("/", true);
  }
}

module.exports = AccountPanelController;
