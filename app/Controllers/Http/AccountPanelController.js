"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CashShopData = use("App/Models/CashShopData");

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
      await auth.attempt(username, password);
      response.redirect("/account-panel", true);
    } catch (err) {
      console.log(err);
    }
  }

  async logout({ auth, response }) {
    await auth.logout();
    response.redirect("/", true);
  }
}

module.exports = AccountPanelController;
