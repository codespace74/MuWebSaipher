"use strict";
const { validate } = use("Validator");
const Hash = use("Hash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MEMB_INFO = use("App/Models/MEMB_INFO");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Character = use("App/Models/Character");

const { getCoinsAccount } = require("../../Functions/main");

class AccountPanelController {
  async index({ view, auth, request }) {
    const coins = await getCoinsAccount(auth.user.memb___id);
    return view.render(request.TEMPLATE_NAME + ".account.panel.index", {
      coins,
    });
  }

  async characters({ view, auth, request }) {
    var characters = await this.getCharactersAccount(auth.user.memb___id);
    if (characters.length <= 0) {
      characters = null;
    }
    return view.render(
      request.TEMPLATE_NAME + ".account.panel.characters.index",
      { characters }
    );
  }

  async charactersProfile({ view, auth, request }) {
    const { name } = request.params;
    var character = await this.getCharacterAccount(name);
    if (character[0].AccountID != auth.user.memb___id) {
      character = null;
      var errorAuth = true;
    }
    errorAuth = false;
    return view.render(
      request.TEMPLATE_NAME + ".account.panel.characters.profile",
      {
        character: character[0],
        errorAuth,
      }
    );
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

  async getCharacterAccount(character) {
    const data = await Character.query()
      .select(
        "id",
        "AccountID",
        "Name",
        "cLevel",
        "Class",
        "MapNumber",
        "MapPosX",
        "MapPosY"
      )
      .with("masterLevel", (builder) =>
        builder.select("Name", "MasterLevel", "MasterPoint")
      )
      .where("Name", character)
      .fetch();
    return data.toJSON();
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
