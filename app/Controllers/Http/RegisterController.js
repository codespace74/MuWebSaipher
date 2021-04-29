"use strict";

class RegisterController {
  async index({ view }) {
    return view.render("register/index", {});
  }
}

module.exports = RegisterController;
