/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Character = use("App/Models/Character");

const { getAccountInfo } = require("./Account");

class Characters {
  async getCharactersAccount(user) {
    const { characters } = await getAccountInfo(user);
    return characters;
  }

  async getCharacterAccount(character) {
    const data = await Character.query()
      .select(
        "id",
        "AccountID",
        "Name",
        "cLevel",
        "Class",
        "CtlCode",
        "PkLevel",
        "MapNumber",
        "MapPosX",
        "MapPosY"
      )
      .with("masterLevel", (builder) =>
        builder.select("Name", "MasterLevel", "MasterPoint")
      )
      .where("Name", character)
      .fetch();

    const characterJson = data.toJSON();

    return characterJson[0];
  }
}

module.exports = new Characters();
