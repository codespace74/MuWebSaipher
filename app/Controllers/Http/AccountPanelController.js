"use strict";

class AccountPanelController {
  async index({ view }) {
    return view.render("account/panel/index", {});
  }

  async login({ view }) {
    return view.render("account/login/index", {});
  }

  async auth({ request, response, session, auth }) {
    const { username, password } = request.body
    try {
      await auth.attempt(username, password)
      response.redirect('/account-panel', true)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = AccountPanelController;
