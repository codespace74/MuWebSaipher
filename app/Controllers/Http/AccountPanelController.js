"use strict";

class AccountPanelController {
  async index({ view }) {
    return view.render("account/panel/index", {});
  }

  async login({ view }) {
    return view.render("account/login/index", {});
  }

  async auth({ auth }) {
    await auth.attempt(uid, password);
  }
}

module.exports = AccountPanelController;
