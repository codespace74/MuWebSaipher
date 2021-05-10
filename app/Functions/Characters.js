/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Character = use("App/Models/Character");

const { getAccountInfo, getAccountConnectionStatus } = require("./Account");
const {
  getGuildCharacter,
  getGuildName,
  countGuildMember,
} = require("./Guild");

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
    characterJson[0].status = await getAccountConnectionStatus(
      characterJson[0].AccountID
    );

    if (characterJson) {
      characterJson.guild = await getGuildCharacter(character);
      if (characterJson[0].guild) {
        const Guild_ = await getGuildName(characterJson[0].guild.G_Name);
        characterJson[0].guild.G_Master = Guild_.G_Master;
        characterJson[0].guild.MemberCount = await countGuildMember(
          characterJson[0].guild.G_Name
        );
      }
    }

    return characterJson[0];
  }
}

module.exports = new Characters();
