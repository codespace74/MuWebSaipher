/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const GuildMember = use("App/Models/GuildMember");
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const GuildM = use("App/Models/Guild");

class Guild {
  async getGuildName(guild) {
    const guild_ = await GuildM.query()
      .select("G_Master", "G_Name", "MemberCount")
      .where("G_Name", guild)
      .fetch();
    var guildJson = guild_.toJSON();
    return guildJson[0];
  }

  async getGuildCharacter(character) {
    const guild = await GuildMember.query()
      .select("Name", "G_Name")
      .where("Name", character)
      .fetch();
    var guildJson = guild.toJSON();
    return guildJson[0];
  }

  async countGuildMember(guild) {
    const members = await GuildMember.query()
      .select("*")
      .where("G_Name", guild)
      .getCount();
      console.log(members)
    return members;
  }
}

module.exports = new Guild();
