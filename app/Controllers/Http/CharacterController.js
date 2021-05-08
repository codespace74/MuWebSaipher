"use strict";
const {
  getCharactersAccount,
  getCharacterAccount,
} = require("../../Functions/Characters");

class CharacterController {
  async index({ view, auth, request }) {
    var characters = await getCharactersAccount(auth.user.memb___id);
    if (characters.length <= 0) {
      characters = null;
    }
    return view.render(
      request.TEMPLATE_NAME + ".account.panel.characters.index",
      { characters }
    );
  }

  async profile({ view, auth, request }) {
    const { name } = request.params;
    var character = await getCharacterAccount(name);
    if (character && character.AccountID != auth.user.memb___id) {
      character = null;
      var errorAuth = true;
    }
    errorAuth = false;
    return view.render(
      request.TEMPLATE_NAME + ".account.panel.characters.profile",
      {
        character: character,
        errorAuth,
      }
    );
  }
}

module.exports = CharacterController;
