"use strict";
const { validate } = use("Validator");
const Hash = use("Hash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const CashShopData = use("App/Models/CashShopData");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Character = use("App/Models/Character");

class AccountPanelController {
  async index({ view, auth }) {
    const coins = await this.getCoinsAccount(auth.user.memb___id);
    return view.render("account.panel.index", { coins });
  }

  async characters({ view, auth }) {
    const characters = await this.getCharactersAccount(auth.user.memb___id);
    return view.render("account.panel.characters.index", { characters });
  }

  async charactersProfile({ view, auth, request }) {
    const { name } = request.params;

    var character = await this.getCharacterAccount(name);
    if (character.AccountID != auth.user.memb___id) {
      character = null;
      var errorAuth = true;
    }
    errorAuth = false;
    return view.render("account.panel.characters.profile", {
      character,
      errorAuth,
    });
  }

  async getCoinsAccount(user) {
    const data = await CashShopData.findBy("AccountID", user);
    return data;
  }

  async getAccountInfo(user) {
    const data = await MEMB_INFO.query()
      .select("memb_guid", "memb___id", "memb_name", "AccountLevel")
      .with("characters", (builder) =>
        builder.select(
          "id",
          "AccountID",
          "Name",
          "cLevel",
          "Class",
          "MapNumber",
          "MapPosX",
          "MapPosY"
        )
      )
      .where("memb___id", user)
      .fetch();
    return data.toJSON();
  }

  async getCharactersAccount(user) {
    const data = await this.getAccountInfo(user);
    return data[0].characters;
  }

  async getCharacterAccount(character, user) {
    const data = await Character.findBy("Name", character);
    return data;
  }

  async login({ view }) {
    return view.render("account.login.index", {});
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
      await auth.attempt(username, password);
      response.redirect("/account-panel", true);
    }
  }

  async logout({ auth, response }) {
    await auth.logout();
    response.redirect("/", true);
  }
}

module.exports = AccountPanelController;
