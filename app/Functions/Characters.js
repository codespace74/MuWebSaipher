/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Character = use("App/Models/Character");

const { getAccountInfo } = require("./Account");
const { getGuildCharacter, getGuildName } = require("./Guild")

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

    if (characterJson) {
      characterJson[0].guild = await getGuildCharacter(character)
      if (characterJson[0].guild) {
        const Guild_ = await getGuildName(characterJson[0].guild.G_Name)
        characterJson[0].guild.G_Master = Guild_.G_Master
        characterJson[0].guild.MemberCount = Guild_.MemberCount
      }
    }

    return characterJson[0];
  }
}

module.exports = new Characters();
